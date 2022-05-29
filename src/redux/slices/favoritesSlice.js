import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
}

const favoritesSlides = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      if (state.favorites.find(item => item.id === action.payload.id)) {
        const items = state.favorites.filter(item => item.id !== action.payload.id)
        state.favorites = items
        return
      }
      state.favorites.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.favorites.filter(item => item.id !== action.payload.id)
    },
  },
})

export const { setFavorite, removeFavorite } = favoritesSlides.actions

export default favoritesSlides.reducer
