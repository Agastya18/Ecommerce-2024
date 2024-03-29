
//import productData from "../productData"
import { useState } from "react";
import { Link, useParams,useNavigate } from 'react-router-dom'
import Rating from "../components/Rating";
import Layout from "../components/Layout";
import { useGetProductQuery ,useCreateReviewMutation} from "../redux/slices/ProductApiSlice"

import { useDispatch, useSelector } from 'react-redux';
import Review from "../components/Review";
import Loader from "../components/Loader";
import Message from "../components/Message";
import toast from "react-hot-toast";
import MyImages from "../components/MyImages";
import { addToCart } from "../redux/slices/cartSlice";
const ProductScreen = () => {
  const [rev,setRev] = useState(false) 
  const{data,isLoading,error,refetch}=useGetProductQuery();
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
const navigate = useNavigate()
  const increaseQuantity = () => {
    if (qty >= product.countInStock) return
    setQty(qty + 1)
  }
  const decreaseQuantity = () => {
    if (qty <= 1) return
    setQty(qty - 1)
  }
  const [ createReview ] = useCreateReviewMutation()
  const {userInfo}=useSelector(state=>state.auth)
 // console.log(rating,comment)
 
    const {id: productId} = useParams();
    
    const product = data?.products.find((p) => p._id === productId)
   // console.log(product)

   const addToCartHandler = () => {
    dispatch(addToCart({...product, qty}))
    navigate('/cart')
   }

    const submitHandler = async(e) => {
      e.preventDefault()
      try {
        
         await createReview({ productId,rating,comment});
        //console.log("response data--+",resp)
         setRev(true)
      
        refetch();
        toast.success("review add succesfully")
        setComment(" ")
        setRating(1)
  
  
      } catch (error) {
        toast.error("An error occurred in review")
      }
     
     
    }
  return (
    <Layout title={"Product"}>
     
      <section className=" py-2 sm:py-3 ">
      <Link className=' bg-slate-400  p-3 ml-6  m-2 rounded-md' to='/'>
        Go Back
      </Link>
      {isLoading ? (
        <div className="text-center text-2xl font-bold"> <Loader/> </div>
        
      ) : error ?(
        <div className="text-center text-red-500 text-2xl font-bold">  {error?.data?.message || error.error}</div>
      ):(
        <div className=" mx-auto px-4  ">
  

    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-7 lg:grid-cols-5 lg:gap-16">
      <div className="lg:col-span-3 lg:row-end-1">
       
        <MyImages imgs ={product.images}/>
      </div>
      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
          {product?.name}
        </h1>
        <div className="mt-5 flex items-center">
          <div className="flex items-center">
            
            <Rating value={product?.rating}  />
             <p className="ml-24">{product?.rating} Rating</p>
          </div>
          
        </div>
        
        <p className=" mt-8 inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
  <span>${product?.price}</span>
  <span className=" ml-1 text-base font-normal text-gray-500 line-through dark:text-gray-400">
    $1000.00
  </span>
</p>

{/* <p className="text-green-600 dark:text-green-500 "> Status: {product.stockIn} in stock</p> */}
{
  product?.
countInStock
 > 3 ? <p className="text-green-600 dark:text-green-500 "> <p className=" inline font-bold text-black"> Status:</p> {product?.countInStock} in stock</p> : product?.countInStock ==0 ? <p className="text-red-600 dark:text-red-500 "> <p className=" inline font-bold text-black"> Status:</p>  Out of stock</p>:<p className="text-yellow-600 dark:text-yellow-500 "> <p className=" inline font-bold text-black"> Status:</p>  only  {product?.countInStock} in stock !</p>
 
  
  
}

<div className="w-32 mb-8  mt-5">
  <label
    htmlFor=""
    className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
  >
    Quantity
  </label>
  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer  hover:text-gray-700  hover:bg-gray-400" onClick={decreaseQuantity}>
      <span className="m-auto text-2xl font-thin">-</span>
    </button>
    <input
      type="number"
      readOnly
      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
     
      value={qty}
    />
    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-400" onClick={increaseQuantity}>
      <span className="m-auto text-2xl font-thin">+</span>
    </button>
  </div>
</div>
  <div className=" border-gray-900 py-4  text-gray-900 hover:border-gray-400 hover:text-gray-800">
     <div className=" inline-block font-bold font-mono ">Description:</div>
     <p className=" font-light">{product?.description}</p>
  </div>

        <div className="mt-2 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div className="flex items-end">
            {/* future use----/--/---/- */}
            <p className=" font-bold">Brand: <p className=" inline font-light">{product?.brand}</p></p>
            
            
          </div>
          
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
            onClick={addToCartHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Buy now
          </button>
        </div>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center text-left text-sm font-medium text-gray-600">
            <svg
              className="mr-2 block h-5 w-5 align-middle text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                className=""
              />
            </svg>
            Free shipping worldwide 
          </li>
          
        </ul>
      </div>
      <div className="lg:col-span-3">
        <div className="border-b border-gray-300 ">
          <nav className="flex gap-4">
            
            <div
             
              title=""
              className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
            >
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                {" "}
                {product?.numReviews}{" "}
              </span>
              
            </div>
      
            {!userInfo ? <Message  message={"Please  Login to write review."}/> : <form className=" md:flex items-center justify-center bg-slate-50 rounded-md" onSubmit={submitHandler} >

<label className="inline text-gray-700 text-sm font-bold ">Rating:</label>

<select onChange={(e)=>setRating(e.target.value)} className="px-3  border rounded-md focus:outline-none focus:border-blue-500" id="cars" name="cars">
<option value=''>Select...</option>
            <option value='1'>1 - Poor</option>
            <option value='2'>2 - Fair</option>
            <option value='3'>3 - Good</option>
            <option value='4'>4 - Very Good</option>
            <option value='5'>5 - Excellent</option>
</select>

<label className="block md:inline text-gray-700 text-sm font-bold ml-2 ">Comment:</label>
<textarea onChange={(e)=>setComment(e.target.value)} value={comment}   rows="1" placeholder="please share your experience?"
className=" md:w-80   w-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
<button disabled={rev} type="submit" className="inline-flex items-center justify-center bg-green-800 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-gray-800 transition-all duration-200 ease-in-out ml-8 disabled:hidden">
  Submit
</button>
</form>}
          </nav>
          
        </div>
        
        <div className="mt-8 flow-root sm:mt-6">
         
          

          {/* // in future loop for review */}
          {product?.reviews.length ===0 && product?.reviews[0] === undefined ? <Message message={"No review yet."}/> : product?.reviews.map((review) => (
            <Review key={review._id} reviews={review} proInfo={product?._id} logInfo={userInfo?.user} setRev={setRev} />
          ))}
          
         
         
          
        </div>
      </div>
    </div>
  </div>
      ) }
</section>
    </Layout>


  )
}

export default ProductScreen