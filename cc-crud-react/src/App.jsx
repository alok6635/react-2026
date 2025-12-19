import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Products from '../components/products/Products'
import Articles from '../components/Articles/Articles'
import Admin from '../components/admin/Admin'
import Contact from '../components/contacts/Contact'
import NotFound from '../components/notFound/NotFound'
import SingleProduct from '../components/products/SingleProduct'
import Sales from '../components/admin/sales/Sales'
import Sellers from '../components/admin/seller/Seller'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main className='app_main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct/>} />
          <Route path='/articles' element={<Articles />} />
           <Route path="/admin" element={<Admin />}>
            <Route path="sales" element={<Sales />} />
            <Route path="seller" element={<Sellers />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
export default App