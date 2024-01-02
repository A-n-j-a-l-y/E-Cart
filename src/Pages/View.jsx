import React from 'react'

function View() {
  return (
    <div className='mt-5 container'>
        <div className="row mt-5 align-items-center">
            <div className="col-md-4">
                <img style={{height:'400px',width:'100%'}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" alt="product" />
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-6'>
                <p>PID: shuihuhufhuufg</p>
                <h1>Product Title</h1>
                <h5 className='fw-bolder'>$ 560</h5>
                <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam expedita totam adipisci dolores rem excepturi ut rerum ipsa. Obcaecati non perspiciatis voluptatum at architecto necessitatibus sapiente asperiores quidem voluptatem!</p>
                <div className='d-flex justify-content-between mt-4'>
                    <button className='btn btn-outline-dark fs-5'><i className="fa-solid fa-heart text-danger"></i>Wishlist</button>
                    <button className='btn btn-outline-dark fs-5'><i className="fa-solid fa-heart text-success"></i>Cart</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default View