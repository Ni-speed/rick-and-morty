import { baseApi } from '@/services'
import { CharactersResponse, SingleCharacter } from '@/services/characters/types'

const charactersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacters: build.query<CharactersResponse, null | void>({
      query: () => ({
        method: 'GET',
        url: '/character',
      }),
    }),
    getSingleCharacter: build.query<SingleCharacter, { id: number }>({
      query: id => ({
        method: 'GET',
        url: `/character/${id}`,
      }),
    }),
  }),
})

export const { useGetCharactersQuery, useGetSingleCharacterQuery } = charactersApi
