export type EpisodesResponse = {
  info: EpisodesResponseInfo
  results: Episode[]
}
export type EpisodesResponseInfo = {
  count: number
  next: string
  pages: number
  prev?: any
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
