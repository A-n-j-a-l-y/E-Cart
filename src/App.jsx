import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/view/:id' element={<View/>} />
      <Route path='/*' element={<Navigate to={'/'}/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
