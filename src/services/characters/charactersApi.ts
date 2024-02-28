import { baseApi } from '@/services'
import { Character, CharactersResponse } from '@/services/characters/types'

const charactersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacter: build.query<Character, { id: number }>({
      query: id => ({
        method: 'GET',
        url: `/character/${id}`,
      }),
    }),
    getCharacters: build.query<CharactersResponse, null | void>({
      query: () => ({
        method: 'GET',
        url: '/character',
      }),
    }),
  }),
})

export const { useGetCharacterQuery, useGetCharactersQuery } = charactersApi
