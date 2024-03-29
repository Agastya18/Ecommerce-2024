import  { useEffect } from 'react';
import Layout from '../components/Layout'
import { Link, useNavigate,useParams  } from 'react-router-dom'
import OrderCart from '../components/OrderCard' 
import EmptyCart from '../components/EmptyCart';

import { useDispatch, useSelector } from 'react-redux';
import { useGetOrderByIdQuery } from '../redux/slices/ordersApiSlice';

import Loader from '../components/Loader';
import Message from '../components/Message';

const SuccessOrder = () => {
  const { id: orderId } = useParams();
  const { data: order,  isLoading,error } = useGetOrderByIdQuery(orderId);
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  const {userInfo }=auth
  console.log(order);
  return (
    <>
   
    <Layout title={"order-summary"}>
    { isLoading ? <Loader/> : error ? <Message message={"error occure"} /> :<div className="py-8 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto ">
     
     <div className="flex justify-start item-start space-y-1 flex-col">
       <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
         Order Summary
       </h1>
       <p className="text-base  font-medium leading-6 text-gray-600">
         Order id: <span className=' font-light'>{order?._id}</span>
       </p>
       <p className="text-base  font-light leading-6 text-gray-600">
         {order?.createdAt.substring(0, 10)}
       </p>
     </div>
     <div className="mt-5 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
       <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
         <div className=" flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
           <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">
            { order?.user.name } Cart
           </p>
           
           
           {
             order?.orderItems.length === 0 ? <EmptyCart /> : order.orderItems.map((item, index) => (
               <OrderCart key={index} {...item} />
             ))
           }

         </div>
         <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
           <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
             <h3 className="text-xl  font-semibold leading-5 text-gray-800">
               Summary
             </h3>
             <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
               <div className="flex justify-between w-full">
                 <p className="text-base  leading-4 text-gray-800">
                   Subtotal
                 </p>
                 <p className="text-base leading-4 text-gray-600">
                  ${order?.itemsPrice}
                 </p>
               </div>
               <div className="flex justify-between items-center w-full">
                 <p className="text-base  leading-4 text-gray-800">
                   Tax
                 </p>
                 <p className="text-baseleading-4 text-gray-600">
                   {order?.taxPrice}
                 </p>
               </div>
               <div className="flex justify-between items-center w-full">
                 <p className="text-base  leading-4 text-gray-800">
                   Discount{" "}
                   
                 </p>
                 <p className="text-base  leading-4 text-gray-600">
                   -$28.00 (50%)
                 </p>
               </div>
               <div className="flex justify-between items-center w-full">
                 <p className="text-base  leading-4 text-gray-800">
                   Shipping
                 </p>
                 <p className="text-baseleading-4 text-gray-600">
                   {order?.shippingPrice}
                 </p>
               </div>
             </div>
             <div className="flex justify-between items-center w-full">
               <p className="text-base  font-semibold leading-4 text-gray-800">
                 Total
               </p>
               <p className="text-base  font-semibold leading-4 text-gray-600">
                 ${order?.totalPrice}
               </p>
             </div>
           </div>
           <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
             <h3 className="text-xl  font-semibold leading-5 text-gray-800">
               Payment Method:
             </h3>
             <div className="flex justify-between items-start w-full">
               <div className="flex justify-center items-center space-x-4">
                 <div className="w-8 h-8">
                   <img
                     className="w-full h-full"
                     alt="logo"
                     src="https://i.ibb.co/L8KSdNQ/image-3.png"
                   />
                 </div>
                 <div className="flex flex-col justify-start items-center">
                   <p className="text-lg leading-6  font-semibold text-gray-800">
                     {order?.paymentMethod}
                     <br />
                     
                   </p>
                 </div>
               </div>
              
             </div>
             <div className="w-full flex justify-center items-center">
               <div    className="hover:bg-green-600   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green py-5 w-96 md:w-full bg-green-500 text-base font-medium leading-4 text-white">
                 <div className=' inline ml-[35%]'>
                 {order?.isPaid ? <p className='inline'>Payment Succeeded !</p> : <p className='inline'>Payment Pending</p>}  
                 </div>   
               </div>
              
              
             </div>
           </div>
         </div>
       </div>
       <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
         <h3 className="text-xl font-semibold leading-5 text-gray-800">
           Customer Details
         </h3>
         <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
           <div className="flex flex-col justify-start items-start flex-shrink-0">
             <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
               <img className='w-16 h-16  rounded-full  md:w-20 md:h-20 2xl:w-16 2xl:h-16'
                 src={order?.user.avatar}
                 alt="avatar"
               />
               <div className="flex justify-start items-start flex-col space-y-2">
                 <p className="text-base  font-semibold leading-4 text-left text-gray-800">
                  {order?.user.name}
                 </p>
                 
               </div>
             </div>
             <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
               <svg
                 width={24}
                 height={24}
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
                 <path
                   d="M3 7L12 13L21 7"
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
               <p className="cursor-pointer text-sm leading-5 ">
                {order?.user.email}
               </p>
             </div>
           </div>
           <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
             <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
               <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                 <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                   Shipping Address
                 </p>
                 <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                   {order?.shippingAddress.address}, {order?.shippingAddress.city},{ order?.shippingAddress.province}   {order?.shippingAddress.postalCode}, {order?.shippingAddress.country}
                 </p>
               </div>
               
             </div>
             <div className=" bg-blue-100 rounded flex w-full justify-center items-center md:justify-start md:items-start mt-4">
           
               <div className=" mt-2 md:mt-0  py-5  md:ml-14  w-96 2xl:w-full text-base font-medium leading-4 text-gray-800  ml-14">
               Order Status: <span className=' text-orange-500'>{order?.orderStatus}</span>
               </div>
               
               
             </div>
             <Link to={'/my-order'} className=' shadow-md hover:bg-purple-200 bg-purple-300 rounded flex w-full justify-center items-center md:justify-start md:items-start mt-4'>
             <div className=" mt-2 md:mt-0  py-2  md:ml-32  w-96 2xl:w-full text-base font-medium leading-4 text-gray-800  ml-14">
               My-Order
               </div>
             </Link>
           </div>
         </div>
       </div>
     </div>
   </div> }
    </Layout>
  </>
  )
}

export default SuccessOrder