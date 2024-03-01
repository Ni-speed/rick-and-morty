import { createSlice } from '@reduxjs/toolkit'
export type SuperSelectOption = {
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
      { label: 'Female', value: 'Female' },
      { label: 'Male', value: 'Male' },
      { label: 'Genderless', value: 'Genderless ' },
      { label: 'Unknown', value: 'Unknown ' },
    ],
    species: [
      { label: 'Human', value: 'Human' },
      { label: 'Alien', value: 'Alien' },
      { label: 'Robot', value: 'Robot' },
    ],
    status: [
      { label: 'Alive', value: 'Alive' },
      { label: 'Dead', value: 'Dead' },
      { label: 'Unknown', value: 'Unknown' },
    ],
  },
}

const slice = createSlice({
  initialState,
  name: 'charackter',
  reducers: {
    // updateGender(state, action: PayloadAction<SuperSelectOption>) {
    //   state.superSelectOptions.gender = [
    //     { label: action.payload.label, value: action.payload.value },
    //   ]
    // },
    // updateSpecies(state, action: PayloadAction<SuperSelectOption>) {
    //   state.superSelectOptions.species = [
    //     { label: action.payload.label, value: action.payload.value },
    //   ]
    // },
    // updateStatus(state, action: PayloadAction<SuperSelectOption>) {
    //   state.superSelectOptions.status = [
    //     { label: action.payload.label, value: action.payload.value },
    //   ]
    // },
    // resetFilters(state) {
    //   state.status = initialState.status;
    //   state.species = initialState.species;
    //   state.type = initialState.type;
    //   state.gender = initialState.gender;
    // },
  },
})

// export const { updateGender, updateSpecies, updateStatus } = slice.actions
export const charackterReducer = slice.reducer
