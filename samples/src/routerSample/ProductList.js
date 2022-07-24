import { queries } from '@testing-library/react';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../store/cartContext';

function ProductList() {

    const { cart, setCart } = useContext(cartContext)
    const [products, setProducts] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then((res) => {
                setProducts(res.data)
            })

    }, [])

    const goToDetail = (id) => {

        navigate(`/urunler/${id}`)

    }


    const editProduct = (id) => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then((res) => {
                navigate(`/edit/${id}`)
            })
    }



    const addToCart = (item) => {

        let cartProduct = cart.find(q => q.id === item.id);

        if (cartProduct) {

            cartProduct.quantity += 1;
            setCart([...cart]);
        }
        else {
            let newCartProduct = {
                id: item.id,
                name: item.name,
                price: item.unitPrice,
                quantity: 1
            }

            setCart([...cart, newCartProduct])
        }
    }

    const decreaseToCart = (item) => {
        let cartProduct = cart.find(q => q.id === item.id);

        if (cartProduct) {
            cartProduct.quantity -= 1;

            if (cartProduct.quantity === 0) {
                let newCart = cart.filter(q => q.id !== item.id)
                setCart(newCart)
            }
            else {
                setCart([...cart])
            }

        }
    }

    return (<>
        <h1>Products Table</h1>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Unite Price</td>
                    <td>Detail</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td><Link to={'/urunler/' + item.id}>{item.name}</Link></td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => goToDetail(item.id)}>Go To Detail</button></td>
                            <td><button onClick={() => decreaseToCart(item)}> - </button>
                                <button onClick={() => addToCart(item)}> + </button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductList