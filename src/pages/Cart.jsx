import React from 'react'
import { useSelector } from 'react-redux'
import Empty from '../components/empty/Empty'
import CartFull from '../components/cartFull/CartFull'
import empty from '../assets/img/empty-cart.png'

function Cart() {
  const { cartItems } = useSelector(state => state.cartItems)

  return (
    <>
      {!cartItems.length ? (
        <Empty
          title='Корзина пустая'
          descr='Для того, чтобы сделать заказ, перейди на главную страницу.'
          img={empty}
        />
      ) : (
        <CartFull />
      )}
    </>
  )
}

export default Cart
