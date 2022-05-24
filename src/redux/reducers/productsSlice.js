import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const productSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
      state.items.sort((a, b) => a.rating - b.rating)
    },
    sortItems: (state, action) => {
      const sortTypes = { популярности: 'rating', цене: 'price', алфавиту: 'title' }
      if (action.payload === 'алфавиту') {
        state.items.sort((a, b) => a.title.localeCompare(b.title))
      }

      state.items.sort((a, b) => a[sortTypes[action.payload]] - b[sortTypes[action.payload]])
    },
  },
})

export const { setItems, sortItems } = productSlice.actions

export default productSlice.reducer
