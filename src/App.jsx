import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useDispatch, useSelector } from 'react-redux'
import { count } from './redux/slices/cartItemsSlice'
import FavoritesPage from './pages/FavoritesPage'
import './scss/app.scss'

function App() {
  const { cartItems } = useSelector(state => state.cartItems)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(count(cartItems))
  }, [cartItems, dispatch])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
