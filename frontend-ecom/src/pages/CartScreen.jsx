
import { MdDeleteForever } from "react-icons/md";
import Layout from '../components/Layout';
import Progress from '../components/Progress';
const CartScreen = () => {
  return (
   <Layout title={"Cart"}>
   <Progress/>
     <div className="h-screen  pt-20">
    <h1 className="mb-9 text-center text-4xl font-bold w-[75%] mx-auto  font-Oswald">Your Cart</h1>
    <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0 bg-gray-200 p-3">
      <div className="rounded-lg md:w-2/3">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                Nike Air Max 2019
              </h2>
              <p className="mt-1 text-sm text-gray-700 font-semibold">Nike</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  defaultValue={2}
                  min={1}
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4 ">
                <p className="text-sm mr-4  mt-2 font-semibold">$100.2</p>
                <MdDeleteForever size={"25px"} className=' mt-2' />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                Nike Air Max 2019 
              </h2>
              <p className="mt-1 text-sm text-gray-700 font-semibold">Nike</p>
            </div>
            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  defaultValue={2}
                  min={1}
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4">
              <p className="text-sm mr-4  mt-2 font-semibold">$100.2</p>
                <MdDeleteForever size={"25px"} className=' mt-2' />
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Sub total */}
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <h1 className="mb-4 text-center text-xl font-bold   font-mono">Order Total</h1>
      <hr className="my-4" />
        <div className="mb-5 flex justify-between ">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            
          </div>
        </div>
        <button className="mt-5 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
   
        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-5 ml-2">
  <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
  </svg>
  Continue Shopping
</a>
      </div>
    </div>
  </div>
   </Layout>
  
  )
}

export default CartScreen