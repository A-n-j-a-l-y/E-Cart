import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../Redux/Slice/productSlice';


function Header({insideHome}) {
  
  const dispatch= useDispatch()

  const [wishlistCount,setWishlistCount]=useState(0);
  const [cartCount,setCartCount]=useState(0);
  const wishlist=useSelector((state)=>state.wishlistSlice.wishlist)
  const cart=useSelector((state)=>state.cartReducer)

 

  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])
  

  // useEffect(()=>{
  //   setWishlistCount(JSON.parse(localStorage.getItem("wishlist")).length)
  // },[wishlistCount])
  // console.log(wishlistCount);

  return (
    <>
      <Navbar className="position-top top-0 w-100 mb-5 bg-info">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <h5 className='d-flex align-items-center' style={{height:'50px'}}>
              <i className="fa-solid fa-truck-fast fa-beat me-1"></i>               
               E Cart
            </h5>
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {insideHome&&<Nav.Link className='me-lg-5'>
                  <input onChange={e=>dispatch(productSearch(e.target.value.toLowerCase()))} className='form-control' type="text" placeholder='Search'/>
              </Nav.Link>}
              <Nav.Link className='btn  rounded '>
               <Link to={'/wishlist'} className='d-flex align-items-center' style={{color:'white',textDecoration:'none'}}> 
                  <i className="fa-solid fa-heart text-danger " ></i>WishList
                  <Badge className='ms-2 rounded' bg='light'>{wishlistCount}</Badge>
               </Link>
              </Nav.Link>
              <Nav.Link className='btn  rounded'>
                <Link to={'/cart'} className='d-flex align-items-center' style={{color:'white',textDecoration:'none'}}> 
                    <i class="fa-solid fa-cart-shopping text-danger me-1"></i>Cart
                    <Badge className='ms-2 rounded' bg='light'>{cartCount}</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> 
        </Container>
      </Navbar>


    </>
  )
}

export default Header