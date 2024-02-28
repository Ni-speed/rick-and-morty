import { baseApi } from '@/services'
import { EpisodesResponse, SingleEpisode } from '@/services/episodes/types'

const episodesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getEpisodes: build.query<EpisodesResponse, null | void>({
      query: () => ({
        method: 'GET',
        url: '/episode',
      }),
    }),
    getMultipleEpisodes: build.query<SingleEpisode, { ids: string }>({
      query: ({ ids }) => ({
        method: 'GET',
        url: `/episode/${ids}`,
      }),
    }),
    getSingleEpisode: build.query<SingleEpisode[], { id: number }>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/episode/${id}`,
      }),
    }),
  }),
})

export const { useGetEpisodesQuery, useGetMultipleEpisodesQuery, useGetSingleEpisodeQuery } =
  episodesApi
