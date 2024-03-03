import { ResponseInfo } from '@/services/characters'

export type LocationsResponse = {
  info: ResponseInfo
  results: Location[]
}

export type Location = {
  created: string
  dimension: string
  id: number
  name: string
  residents: string[]
  type: string
  url: string
}
export type GetLocationsType = {
  dimension?: string
  episode?: string
  id?: number
  name?: string
  page?: number
  type?: string
}
