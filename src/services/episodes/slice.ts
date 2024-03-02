import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
const slice = createSlice({
  initialState,
  name: 'episode',
  reducers: {},
})

export const episodeReducer = slice.reducer
