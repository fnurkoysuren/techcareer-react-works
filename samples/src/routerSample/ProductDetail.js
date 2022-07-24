import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    let {id} = useParams();
    const [product, setProduct]= useState({})

    useEffect(() => {

        axios.get(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => console.log('axios get metot err:', err))
    },[])

  return (<>
    <p>ID: {product.id}</p>
    <p>NAME: {product.name}</p>
    <p>UNIT PRICE: {product.unitPrice}</p>
  </>
  )
}

export default ProductDetail