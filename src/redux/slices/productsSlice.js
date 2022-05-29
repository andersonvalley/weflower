import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  searchValue: '',
}

const productSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { setItems, sortItems } = productSlice.actions

export default productSlice.reducer
