import { baseApi } from '@/services'
import { Character, CharactersResponse, GetRequestType } from '@/services/characters/types'

const charactersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacter: build.query<Character, GetRequestType>({
      query: id => ({
        method: 'GET',
        url: `/character/${id}`,
      }),
    }),
    getCharacters: build.query<CharactersResponse, GetRequestType>({
      query: ({ gender, name, page, species, status, type }) => ({
        method: 'GET',
        params: {
          gender,
          name,
          page,
          species,
          status,
          type,
        },
        url: '/character',
      }),
    }),
  }),
})

export const { useGetCharacterQuery, useGetCharactersQuery } = charactersApi
