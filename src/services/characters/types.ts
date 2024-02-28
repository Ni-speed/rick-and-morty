export type CharactersResponse = {
  info: CharactersResponseInfo
  results: Character[]
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
type Status = 'Alive' | 'Dead' | 'unknown'
export type Character = {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: CharactersResponseResultsLocation
  name: string
  origin: CharactersResponseResultsOrigin
  species: string
  status: Status
  type: string
  url: string
}
