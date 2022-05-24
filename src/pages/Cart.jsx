import React from 'react'
import { useSelector } from 'react-redux'
import CartEmpty from '../components/CartEmpty/CartEmpty'
import CartFull from '../components/CartFull/CartFull'

function Cart({ quantityCalc }) {
  const cartItems = useSelector(state => state.addToCart.cartItems)

  return <>{!cartItems.length ? <CartEmpty /> : <CartFull quantityCalc={quantityCalc} />}</>
}

export default Cart
