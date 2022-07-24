import React, { useContext } from 'react'
import { cartContext } from '../store/cartContext'
import Button from '@mui/material/Button';

function CartPage() {

    const {cart, setCart} = useContext(cartContext)

    const removeItem = (id) => {
        let newCart = cart.filter(q => q.id !== id) ;
        setCart(newCart);
    }

  return (<>
  <Button variant="outlined" color="error" onClick={() => setCart([])}>Empty Cart</Button>
  <ul>
      {
          cart && cart.map((item,key) => {
              return <li key={key}>
                  {item.name} - {item.price.toFixed(2)} * {item.quantity}
                  <button onClick={() => removeItem(item.id)}>Remove Item</button>
              </li>
          })
      }
  </ul>
  </>
  )
}

export default CartPage