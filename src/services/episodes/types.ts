export type EpisodesResponse = {
  info: EpisodesResponseInfo
  results: SingleEpisode[]
}
export type EpisodesResponseInfo = {
  count: number
  next: string
  pages: number
  prev?: any
}
export type SingleEpisode = {
  air_date: string
  characters: string[]
  created: string
  episode: string
  id: number
  name: string
  url: string
}
