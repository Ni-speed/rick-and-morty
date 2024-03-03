import { LocationsState, getAllLocations, locationReducer } from '@/services/location/slice'
import { PayloadAction } from '@reduxjs/toolkit'

import '@testing-library/jest-dom'

describe('Location Reducer', () => {
  test('should handle getAllLocations pending', () => {
    const initialState: LocationsState = {
      error: null,
      locations: [],
      status: 'idle',
      uniqueDimensions: [],
      uniqueTypes: [],
    }

    const action = { type: getAllLocations.pending.type }
    const newState = locationReducer(initialState, action)

    expect(newState.status).toEqual('loading')
  })

  test('should handle getAllLocations fulfilled', () => {
    const initialState: LocationsState = {
      error: null,
      locations: [],
      status: 'idle',
      uniqueDimensions: [],
      uniqueTypes: [],
    }

    const mockPayload = {
      locations: [
        {
          created: '2017-11-10T12:42:04.162Z',
          dimension: 'Dimension C-137',
          id: 1,
          name: 'Earth',
          residents: [
            'https://rickandmortyapi.com/api/character/1',
            'https://rickandmortyapi.com/api/character/2',
            // ...
          ],
          type: 'Planet',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
      ],
      uniqueDimensions: [{ id: 1, label: 'Dimension 1', value: 'Dimension 1' }],
      uniqueTypes: [{ id: 1, label: 'Type 1', value: 'Type 1' }],
    }

    const action: PayloadAction<typeof mockPayload> = {
      payload: mockPayload,
      type: getAllLocations.fulfilled.type,
    }

    const newState = locationReducer(initialState, action)

    expect(newState.status).toEqual('succeeded')
    expect(newState.locations).toEqual(mockPayload.locations)
    expect(newState.uniqueDimensions).toEqual(mockPayload.uniqueDimensions)
    expect(newState.uniqueTypes).toEqual(mockPayload.uniqueTypes)
  })
})
