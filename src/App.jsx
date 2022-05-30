import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, count } from './redux/slices/cartItemsSlice'
import FavoritesPage from './pages/FavoritesPage'
import { setFavorite } from './redux/slices/favoritesSlice'
import { useLocalStorage } from './hooks/useLocaStorage'

import './scss/app.scss'

function App() {
  const { cartItems } = useSelector(state => state.cartItems)
  const { favorites } = useSelector(state => state.favorites)
  const { getItem, setItem } = useLocalStorage()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(count(cartItems))
  }, [cartItems, dispatch])

  React.useEffect(() => {
    getItem('favorites', item => dispatch(setFavorite(item)))
    getItem('items', item => dispatch(addItem(item)))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setItem('items', cartItems)
    setItem('favorites', favorites)
  }, [favorites, cartItems, setItem])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/favorites' exact element={<FavoritesPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
