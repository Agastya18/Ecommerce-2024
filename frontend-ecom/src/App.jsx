
import {Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './pages/RegisterScreen'
import Login from './pages/LoginScreen'
import Home from './pages/HomeScreen'
import PageNot from './pages/PageNotScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import PrivateRoute from './components/PrivateRoute'
//import Sidebar from './components/Sidebar'
import ProfileScreen from './pages/ProfileScreen'
import { ShippingScreen } from './pages/ShippingScreen'
import OrderScreen from './pages/OrderScreen'

import Success from './components/Success'
import Cancel from './components/Cancel'
import SuccessOrder from './pages/SuccessOrder'
import CheckOut from './pages/CheckOut'
import MyOrder from './pages/MyOrder'
import { Dashboard } from './pages/admin/Dashboard'
import AdminRoute from './components/adminComp/AdminRoute'
import ProductAdmin from './pages/admin/ProductAdmin'
import OrderAdmin from './pages/admin/OrderAdmin'
import CreateProduct from './pages/admin/CreateProduct'
import EditProduct from './pages/admin/EditProduct'
import UserAdmin from './pages/admin/UserAdmin'
import OrderProcess from './pages/admin/OrderProcess'
import ReviewAdmin from './pages/admin/ReviewAdmin'
import QueryPage from './pages/QueryPage'


function App() {
  

  return (
    
     <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search/:keyword" element={<QueryPage/>} />
        <Route path="/product/:id" element={<ProductScreen/>} />
        <Route path='/cart' element={<CartScreen/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

        {/* registered user route */}

        <Route path="" element={<PrivateRoute/>} >

        <Route path='/profile' element={<ProfileScreen/>} />
        <Route path="/ship" element={<ShippingScreen/>} />
        <Route path="/order" element={<OrderScreen/>} />
        <Route path='/order/:id' element={<SuccessOrder/>} />
        {/* <Route path="/payment" element={<PaymentScreen/>} /> */}
        <Route path='/my-order' element={<MyOrder/>} />
        <Route path='/pay' element={<CheckOut/>} />
        </Route>

        {/* admin routes */}
        <Route path='' element={<AdminRoute/>} >
        <Route path='/dash' element={<Dashboard/>} />
        <Route path='/admin/product' element={<ProductAdmin/>} />
        <Route path='/admin/order' element={<OrderAdmin/>} />
        <Route path='/admin/product/create-product' element={<CreateProduct/>} />
        <Route path='/admin/product/edit-product/:id' element={<EditProduct/>} />
        <Route path='/admin/all-user' element={<UserAdmin/>}/>
        <Route path='/admin/process-order/:id' element={<OrderProcess/>} />
        <Route path='/admin/reviews/:id' element={<ReviewAdmin/>} />
        
        </Route>





       
       
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Cancel/>} />

        


        
        
        
       
       {/* <Route path='' element={<PrivateRoute/>} >
       <Route path="/ship" element={<ShippingScreen/>} />
        </Route> */}
        

        
        <Route path="*" element={<PageNot/>} />
        
      </Routes>
     </div>
      
     
    
  )
}

export default App