import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  totalQuantity: 0,
}

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
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

export const { count } = totalSlice.actions

export default totalSlice.reducer
