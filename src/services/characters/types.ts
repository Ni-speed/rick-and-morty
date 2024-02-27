export type CharactersResponse = {
  info: CharactersResponseInfo
  results: CharactersResponseResults[]
}
export type CharactersResponseInfo = {
  count: number
  next: string
  pages: number
  prev: string
}
export type CharactersResponseResultsOrigin = {
  name: string
  url: string
}
export type CharactersResponseResultsLocation = {
  name: string
  url: string
}
export type CharactersResponseResults = {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: CharactersResponseResultsLocation
  name: string
  origin: CharactersResponseResultsOrigin
  species: string
  status: string
  type: string
  url: string
}
