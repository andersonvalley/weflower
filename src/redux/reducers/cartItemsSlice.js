import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartItemsSlice = createSlice({
  name: 'addToCart',
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
    },
    removeAll: state => {
      state.cartItems = []
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
  },
})

export const { addItem, removeItem, removeAll, decrementQuant, incrementQuant } = cartItemsSlice.actions

export default cartItemsSlice.reducer
