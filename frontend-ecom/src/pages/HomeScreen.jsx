import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import product from "../productData"
import { useGetProductsQuery } from "../redux/slices/ProductApiSlice"
const HomeScreen = () => {

  const {data:product}= useGetProductsQuery()
  return (
    <Layout title={"Kharido.com"}>
      <div className=' h-[100%] '>
      <div className='flex flex-wrap justify-center'>
        {product.map((product) => (
          <ProductCard  key={product._id} product={product} />
        ))}
      </div>
     

    </div>
    </Layout>
  )
}

export default HomeScreen