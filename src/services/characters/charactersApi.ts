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
    getCharacters: build.query<CharactersResponse, number>({
      query: page => ({
        method: 'GET',
        params: {
          page,
        },
        url: '/character',
      }),
    }),
    searchCharacters: build.query<CharactersResponse, { name: string }>({
      query: ({ name }) => ({
        method: 'GET',
        url: `/character/?name=${name}`,
      }),
    }),
  }),
})

export const { useGetCharacterQuery, useGetCharactersQuery, useSearchCharactersQuery } =
  charactersApi
