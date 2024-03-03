import { RootState } from '@/services'

export const selectorTypes = (state: RootState) => state.location.uniqueTypes
export const selectorDimensions = (state: RootState) => state.location.uniqueDimensions
