import { CharactersResponse } from '@/services/characters/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: build => ({
    getCharacter: build.query<CharactersResponse, null | void>({
      query: () => ({
        method: 'GET',
        url: '/character',
      }),
    }),
  }),
  reducerPath: 'baseApi',
})

export const { useGetCharacterQuery } = baseApi
