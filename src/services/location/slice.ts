import { SuperSelectOption } from '@/services/characters'
import { Location, LocationsResponse } from '@/services/location/types'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type LocationsState = {
  error: null | string
  locations: Location[]
  status: 'failed' | 'idle' | 'loading' | 'succeeded'
  uniqueDimensions: SuperSelectOption[]
  uniqueTypes: SuperSelectOption[]
}
const initialState: LocationsState = {
  error: null,
  locations: [],
  status: 'idle',
  uniqueDimensions: [],
  uniqueTypes: [],
}
const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getAllLocations.pending, state => {
        state.status = 'loading'
      })
      .addCase(
        getAllLocations.fulfilled,
        (
          state,
          action: PayloadAction<{
            locations: Location[]
            uniqueDimensions: SuperSelectOption[]
            uniqueTypes: SuperSelectOption[]
          }>
        ) => {
          state.status = 'succeeded'
          state.locations = action.payload.locations
          state.uniqueTypes = action.payload.uniqueTypes
          state.uniqueDimensions = action.payload.uniqueDimensions
        }
      )
      .addCase(getAllLocations.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ? action.payload.toString() : 'Unknown error'
      })
  },
  initialState,
  name: 'location',
  reducers: {},
})

export const locationReducer = slice.reducer

export const getAllLocations = createAsyncThunk<{
  locations: Location[]
  uniqueDimensions: SuperSelectOption[]
  uniqueTypes: SuperSelectOption[]
}>('locations/getAll', async () => {
  try {
    let allLocations: Location[] = []
    const uniqueTypesSet: Set<string> = new Set()
    const uniqueDimensionsSet: Set<string> = new Set()

    const locations: LocationsResponse = await fetch(
      'https://rickandmortyapi.com/api/location'
    ).then(res => res.json())
    const lastPage = locations.info.pages

    for (let currentPage = 1; currentPage <= lastPage; currentPage++) {
      const response = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`)
      const data = await response.json()

      allLocations = allLocations.concat(data.results)

      // Collect unique types and dimensions
      data.results.forEach((location: Location) => {
        uniqueTypesSet.add(location.type)
        uniqueDimensionsSet.add(location.dimension)
      })
    }

    // Transform unique types and dimensions to SuperSelectOption
    const uniqueTypes = Array.from(uniqueTypesSet).map((type, index) => ({
      id: index + 1,
      label: type,
      value: type,
    }))
    const uniqueDimensions = Array.from(uniqueDimensionsSet).map((dimension, index) => ({
      id: index + 1,
      label: dimension,
      value: dimension,
    }))

    return { locations: allLocations, uniqueDimensions, uniqueTypes }
  } catch (error) {
    console.error('Error fetching locations:', error)
    throw error
  }
})
