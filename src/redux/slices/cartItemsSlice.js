import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
}

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const double = state.cartItems.find(
        item =>
          item.id === action.payload.id &&
          item.sizes === action.payload.sizes &&
          item.types === action.payload.types
      )

      if (!!double) {
        double.quantity += 1
        return
      }
      state.cartItems.push(action.payload)
    },
    removeItem: (state, action) => {
      const items = state.cartItems.filter(item => item.id !== action.payload.id)
      state.cartItems = items
      toast('Все хорошо...')
    },
    removeAll: state => {
      state.cartItems = []
      toast('Все хорошо...')
    },
    incrementQuant: (state, action) => {
      const double = state.cartItems.find(item => item.id === action.payload.id)
      double.quantity += 1
    },
    decrementQuant: (state, action) => {
      const double = state.cartItems.find(item => item.id === action.payload.id)
      if (double.quantity < 2) return
      double.quantity -= 1
    },
    count: (state, action) => {
      state.totalPrice = 0
      state.totalQuantity = 0
      action.payload.forEach(element => {
        state.totalQuantity += element.quantity
        state.totalPrice += element.price * element.quantity
      })
    },
  },
})

export const { addItem, removeItem, removeAll, decrementQuant, incrementQuant, count } =
  cartItemsSlice.actions

export default cartItemsSlice.reducer
