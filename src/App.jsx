import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './scss/app.scss'

function App() {
  const [cartItems, setCartItems] = React.useState([])

  const addItemToCart = (obj, activeSize, activeType, price) => {
    let newObj = Object.assign({}, obj)
    newObj.types = activeType
    newObj.sizes = newObj.sizes[activeSize]
    newObj.price = price
    newObj.quantity = 1

    const double = cartItems.find(obj => obj.id === newObj.id)
    if (!!double) {
      double.quantity += 1
      setCartItems([...cartItems])
      return
    }

    setCartItems([...cartItems, newObj])
  }

  const countTotalPriceAndQuantity = () => {
    let totalPrice = 0
    let totalQuantity = 0

    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price * cartItems[i].quantity
      totalQuantity += cartItems[i].quantity
    }

    return { totalPrice, totalQuantity }
  }

  return (
    <div className='wrapper'>
      <Header countTotalPriceAndQuantity={countTotalPriceAndQuantity} cartItems={cartItems} />
      <div className='content'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                countTotalPriceAndQuantity={countTotalPriceAndQuantity}
                addItemToCart={addItemToCart}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path='/cart'
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                countTotalPriceAndQuantity={countTotalPriceAndQuantity}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
