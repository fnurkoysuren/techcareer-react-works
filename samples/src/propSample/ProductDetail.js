import React from 'react'

function ProductDetail({name, category, price}) {
    return (<>
        <h1>Product Detail Page</h1>
        <div>
            <p>Name: {name}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
        </div>
    </>
    )
}

export default ProductDetail