
import productData from "../productData"
import { useParams } from 'react-router-dom'
import Rating from "../components/Rating";
import Layout from "../components/Layout";
const ProductScreen = () => {
    const {id: productId} = useParams();
    const product = productData.find((p) => p._id === productId)
    console.log(product)
  return (
    <Layout title={"Product"}>
      <section className=" py-2 sm:py-3">
  <div className=" mx-auto px-4 ">
   
    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
          <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
              <img
                className="h-full w-full max-w-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
          </div>
          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
          {product.name}
        </h1>
        <div className="mt-5 flex items-center">
          <div className="flex items-center">
            
            <Rating value={product.rating}  />
             <p className="ml-24">{product.rating} Rating</p>
          </div>
          
        </div>
        
        <p className=" mt-8 inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
  <span>${product.price}</span>
  <span className=" ml-1 text-base font-normal text-gray-500 line-through dark:text-gray-400">
    $200.00
  </span>
</p>

<p className="text-green-600 dark:text-green-300 "> Status: {product.stockIn} in stock</p>

<div className="w-32 mb-8  mt-5">
  <label
    htmlFor=""
    className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
  >
    Quantity
  </label>
  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
      <span className="m-auto text-2xl font-thin">-</span>
    </button>
    <input
      type="number"
      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
      placeholder={1}
    />
    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
      <span className="m-auto text-2xl font-thin">+</span>
    </button>
  </div>
</div>


        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div className="flex items-end">
            {/* future use----/--/---/- */}
            <p className=" font-bold">Brand: Nike</p>
            
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
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
            Add to cart
          </button>
        </div>
        <ul className="mt-8 space-y-2">
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
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                className=""
              />
            </svg>
            Cancel Anytime
          </li>
        </ul>
      </div>
      <div className="lg:col-span-3">
        <div className="border-b border-gray-300">
          <nav className="flex gap-4">
            <a
              href="#"
              title=""
              className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
            >
              {" "}
              Description{" "}
            </a>
            <a
              href="#"
              title=""
              className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
            >
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                {" "}
                {product.numReviews}{" "}
              </span>
            </a>
          </nav>
        </div>
        <div className="mt-8 flow-root sm:mt-12">
          <h1 className="text-xl font-bold">{product.description}</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            accusantium nesciunt fuga.
          </p>
         
         
          
        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>


  )
}

export default ProductScreen