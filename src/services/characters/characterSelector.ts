import { RootState } from '@/services'

export const selectorGender = (state: RootState) => state.character.superSelectOptions.gender
export const selectorSpecies = (state: RootState) => state.character.superSelectOptions.species
export const selectorStatus = (state: RootState) => state.character.superSelectOptions.status
