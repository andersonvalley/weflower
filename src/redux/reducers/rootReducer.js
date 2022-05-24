import { combineReducers } from '@reduxjs/toolkit'
import addToCartSlice from './cartItemsSlice'
import ProductsSlice from './productsSlice'
import totalSlice from './totalSlice'

export const rootReducer = combineReducers({
  total: totalSlice,
  addToCart: addToCartSlice,
  product: ProductsSlice,
})
