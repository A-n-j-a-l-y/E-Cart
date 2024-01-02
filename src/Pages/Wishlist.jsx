import React from 'react'

function Wishlist() {
  return (
<div style={{ marginTop: '60px' }}>
            <Row className='mt-5 container'>
                <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                    <Card className='shadow rounded' style={{ width: '18rem' }}>

                        <Link to={'/view/1'}><Card.Img style={{height:'180px'}} variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" /></Link>
                        <Card.Body>
                            <Card.Title>Product Title</Card.Title>
                
<div className='d-flex justify-content-between'>
                                <Button className="btn btn-light fs-5"><i className='fa-solid fa-heart-circle-xmark text-danger'></i></Button>
                                <Button className="btn btn-light fs-5"><i className='fa-solid fa-cart-plus text-success'></i></Button>

</div>                       
 </Card.Body>
                    
                </Card>
                </Col>
            </Row>
        </div>  )
}

export default Wishlist