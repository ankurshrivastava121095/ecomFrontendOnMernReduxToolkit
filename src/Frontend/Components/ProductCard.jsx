/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ imageUrl, productName, productID, productPrice }) => {

    return (
        <>
            {/* <div className="col-md-3 mb-3">
                <div className='product-box-shadow rounded p-3'>
                    <div className='product-img-section'>
                        <img src={imageUrl} className='w-100' alt="" />
                    </div>
                    <div className='text-center fs-4 mt-3'>{productName}</div>
                    <Link to={`/productDetail/${productID}`} className='btn btn-primary w-100 mt-3'>Buy Now ₹{productPrice}</Link>
                </div>
            </div> */}
            <div className="col-md-2 mb-4">
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '25px' }}>
                    <div className='d-flex align-items-center justify-content-center' style={{ height: '250px', overflow: 'hidden', borderRadius: '25px 25px 0 0', backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        {/* <img src={imageUrl} className='w-100' alt={imageUrl} /> */}
                    </div>
                    <div style={{ background: '#14376d', borderRadius: '0 0 25px 25px' }} className='py-2 px-1'>
                        <center>
                            <div className='text-white'>{productName}</div>
                            <div className='text-white'>₹{productPrice}</div>
                            <Link to={`/productDetail/${productID}`} className='text-white'>Add to Cart</Link>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard