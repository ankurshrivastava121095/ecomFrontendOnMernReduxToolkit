/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import ProductCard from '../Components/ProductCard'
import { getProducts } from '../../Features/Product/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const RelatedProducts = () => {

    const dispatch = useDispatch()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchedKeyword = queryParams.get('keyword')?.toLowerCase() || ''; 
    
    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const filteredProducts = Array?.isArray(productsData)
    ? productsData?.filter(product => 
        product?.productName?.toLowerCase()?.includes(searchedKeyword)
      )
    : [];

    const { products, responseStatus, responseMessage } = useSelector((state) => state.products)
    
    const allProducts = () => {
        dispatch(getProducts());
    }

    useEffect(()=>{
        allProducts()
    },[])

    useEffect(()=>{
        if ((responseStatus == 'success' && responseMessage == '')) {
            setIsLoading(false)
            setProductsData(products?.data)
        }
    },[products, responseStatus,responseMessage])

    return (
        <>
            <div className="container mt-5">
                <div className='d-flex flex-wrap align-items-center justify-content-between mb-3'>
                    <h2>Featured Products</h2>
                </div>
                <div className="row">
                {
                    !isLoading ? (
                        filteredProducts?.length > 0 ? (
                            filteredProducts?.map((val, key) => (
                                key <= 3 && (
                                    <React.Fragment key={key}>
                                    <ProductCard 
                                        imageUrl={val?.productImage?.url} 
                                        productName={val?.productName} 
                                        productID={val?._id} 
                                        productPrice={val?.productPrice} 
                                    />
                                    </React.Fragment>
                                )
                            ))
                        ) : (
                            <p>No products found for "{searchedKeyword}"</p>
                        )
                    ) : (
                        <Spinner />
                    )
                }
                </div>
            </div>
        </>
    )
}

export default RelatedProducts