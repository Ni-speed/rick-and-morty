import { ResponseInfo } from '@/services/characters'

export type EpisodesResponse = {
  info: ResponseInfo
  results: Episode[]
}

type Url = string
export type Episode = {
  air_date: string
  characters: string[]
  created: string
  episode: string
  id: number
  name: string
  url: Url
}
export type GetEpisodesType = {
  episode?: string
  id?: number
  name?: string
  page?: number
}
