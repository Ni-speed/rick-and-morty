import { RootState } from '@/services'

export const selectorLocation = (state: RootState) => state.location.locations
export const selectorTypes = (state: RootState) => state.location.uniqueTypes
export const selectorDimensions = (state: RootState) => state.location.uniqueDimensions
