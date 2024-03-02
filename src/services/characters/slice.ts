import { createSlice } from '@reduxjs/toolkit'
export type SuperSelectOption = {
  id: number
  label: string
  value: string
}

type InitialStateType = {
  superSelectOptions: {
    gender: SuperSelectOption[]
    species: SuperSelectOption[]
    status: SuperSelectOption[]
  }
}
const initialState: InitialStateType = {
  superSelectOptions: {
    gender: [
      { id: 1, label: 'Female', value: 'Female' },
      { id: 2, label: 'Male', value: 'Male' },
      { id: 3, label: 'Genderless', value: 'Genderless ' },
      { id: 4, label: 'Unknown', value: 'Unknown ' },
    ],
    species: [
      { id: 1, label: 'Human', value: 'Human' },
      { id: 2, label: 'Alien', value: 'Alien' },
      { id: 3, label: 'Robot', value: 'Robot' },
    ],
    status: [
      { id: 1, label: 'Alive', value: 'Alive' },
      { id: 2, label: 'Dead', value: 'Dead' },
      { id: 3, label: 'Unknown', value: 'Unknown' },
    ],
  },
}

const slice = createSlice({
  initialState,
  name: 'charackter',
  reducers: {},
})

// export const { updateGender, updateSpecies, updateStatus } = slice.actions
export const characterReducer = slice.reducer
