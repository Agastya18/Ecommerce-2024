import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useState } from 'react';
import toast from "react-hot-toast";
import {PaymentElement,useElements,useStripe} from '@stripe/react-stripe-js';
import { useNavigate,useLocation, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateOrderMutation } from '../redux/slices/ordersApiSlice';
import { clearCart } from '../redux/slices/cartSlice';
import Spinner from '../components/Spinner';
const stripePromise = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC)

//  4000003560000008

const CheckoutForm = () => {
    const [isProcessing, setProcessingTo] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state)=>state.cart)

    const [createOrder] = useCreateOrderMutation();

    const submitHandler = async (e) => {
      
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        setProcessingTo(true);

     const {paymentIntent,error}=   await stripe.confirmPayment({elements, confirmParams: {
            return_url: window.location.origin,
          }, redirect: "if_required"})
        if(error){
            setProcessingTo(false);
            toast.error('payment failed')
            return <Navigate to={'/cancel'}/>
        }
       // console.log("patmentintent",paymentIntent.id)

        if(paymentIntent.status==='succeeded'){
            const paymentResult = {
                id:paymentIntent.id,
                status:paymentIntent.status,
                
            }
            const order = {
                orderItems:cart.cartItems,
                shippingAddress:cart.shippingAddress,
                paymentMethod:cart.paymentMethod,
                itemsPrice:cart.itemsPrice,
                shippingPrice:cart.shippingPrice,
                taxPrice:cart.taxPrice,
                totalPrice:cart.totalPrice,
                
                isPaid:true,
                paymentResult,
            }
           const res= await createOrder(order)
           console.log("resp data---",res)
            
            dispatch(clearCart())

           
            toast.success('payment successfull')
            navigate(`/order/${res.data.order._id}`);

        }
        setProcessingTo(false);




    }
  return (
    <div className=' md:max-w-[40%]  w-[100%] mx-auto  mt-40 bg-gray-100 p-5 rounded-md shadow-md  '>
       <div className=''>
       <h1 className=' md:mb-1   md:ml-56 ml-24  font-mono text-xl font-semibold inline-block'>Payment form</h1>
        <h1 className=' md:mb-10  md:ml-52  mb-4 ml-24 text-sm font-thin inline-block'>Test card: 4000003560000008 </h1>
       </div>
       
        <form onSubmit={submitHandler}  >
           
            <PaymentElement />
            <button type="submit" disabled={isProcessing} className=' bg-green-600 w-[100%] mt-7 rounded-md p-1'>
                {isProcessing ? <Spinner/> : 'Pay'}
            </button>

        </form>
    </div>
  )
}

const CheckOut = () => {
   
   
    const location = useLocation();
    const options = {
      // passing the client secret obtained from the server
      clientSecret: location.state
    };
    if(!options.clientSecret){
      return <Navigate to={'/order'}/>
    } 
  return (
    <Elements stripe={stripePromise} options={options} >
      <CheckoutForm />
    </Elements>
  )
}

export default CheckOut