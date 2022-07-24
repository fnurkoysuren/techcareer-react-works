import React, { useEffect, useState } from 'react'

function ProductList() {

    //const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
        .then(response => response.json())
        .then(data => console.log("Product List: ", data))
    }, [])

    return (<>

    </>
    )
}

export default ProductList