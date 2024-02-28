import { baseApi } from '@/services'
import { Episode, EpisodesResponse } from '@/services/episodes/types'

const episodesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getEpisodes: build.query<EpisodesResponse, number>({
      query: page => ({
        method: 'GET',
        url: `/episode?page=${page}`,
      }),
    }),
    getMultipleEpisodes: build.query<Episode[], { ids: string }>({
      query: ({ ids }) => ({
        method: 'GET',
        url: `/episode/${ids}`,
      }),
      transformResponse: async (response: Episode[]) => {
        const data = await response

        if (!Array.isArray(data)) {
          return [data]
        }

        return data
      },
    }),
    getNextPageEpisodes: build.query<EpisodesResponse, number>({
      query: page => ({
        method: 'GET',
        url: `/episode?page=${page}`,
      }),
    }),
    getSingleEpisode: build.query<Episode, { id: number }>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/episode/${id}`,
      }),
    }),
  }),
})

export const {
  useGetEpisodesQuery,
  useGetMultipleEpisodesQuery,
  useGetNextPageEpisodesQuery,
  useGetSingleEpisodeQuery,
} = episodesApi
