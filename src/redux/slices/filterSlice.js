import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortBy: { prop: 'rating', name: 'популярности' },
  categoryId: 0,
  searchValue: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryId = action.payload
    },
    sortItems: (state, action) => {
      const sortTypes = { популярности: 'rating', цене: 'price', алфавиту: 'title' }
      state.sortBy = { name: action.payload, prop: sortTypes[action.payload] }
    },
    searchItems: (state, action) => {
      state.searchValue = action.payload
    },
  },
})

export const { setCategory, sortItems, searchItems } = filterSlice.actions

export default filterSlice.reducer
