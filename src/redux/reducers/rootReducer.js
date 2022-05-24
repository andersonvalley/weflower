import { combineReducers } from '@reduxjs/toolkit'
import addToCartSlice from './cartItemsSlice'
import totalSlice from './totalSlice'

export const rootReducer = combineReducers({
  total: totalSlice,
  addToCart: addToCartSlice,
})
