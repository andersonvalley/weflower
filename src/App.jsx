import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './scss/app.scss'

import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './redux/reducers/cartItemsSlice'
import { count } from './redux/reducers/totalSlice'

function App() {
  const [searchInput, setSearchInput] = React.useState('')

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.addToCart.cartItems)

  const addItemToCart = (obj, activeSize, activeType, price) => {
    let newItems = Object.assign({}, obj, {
      types: activeType,
      sizes: obj.sizes[activeSize],
      price: price,
      quantity: 1,
    })

    dispatch(addItem(newItems))
  }

  React.useEffect(() => {
    dispatch(count(cartItems))
  }, [cartItems, dispatch])

  return (
    <div className='wrapper'>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home searchInput={searchInput} addItemToCart={addItemToCart} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
