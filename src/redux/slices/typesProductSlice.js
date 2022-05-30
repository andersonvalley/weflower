import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeSize: 0,
  activeType: 0,
}

const typesProduct = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveType: (state, action) => {
      state.activeType = action.payload
    },
    setActiveSize: (state, action) => {
      state.activeSize = action.payload
    },
  },
})

export const { setActiveType, setActiveSize } = typesProduct.actions

export default typesProduct.reducer
