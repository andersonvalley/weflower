import { combineReducers } from '@reduxjs/toolkit'
import cartItemsSlice from './slices/cartItemsSlice'
import favoritesSlice from './slices/favoritesSlice'
import filterSlice from './slices/filterSlice'
import ProductsSlice from './slices/productsSlice'

export const rootReducer = combineReducers({
  cartItems: cartItemsSlice,
  products: ProductsSlice,
  filter: filterSlice,
  favorites: favoritesSlice,
})
