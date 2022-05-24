import React from 'react'
import CartEmpty from '../components/CartEmpty/CartEmpty'
import CartFull from '../components/CartFull/CartFull'

function Cart({ cartItems, countTotalPriceAndQuantity, setCartItems, quantityCalc }) {
  return (
    <>
      {!cartItems.length ? (
        <CartEmpty />
      ) : (
        <CartFull
          countTotalPriceAndQuantity={countTotalPriceAndQuantity}
          setCartItems={setCartItems}
          cartItems={cartItems}
          quantityCalc={quantityCalc}
        />
      )}
    </>
  )
}

export default Cart
