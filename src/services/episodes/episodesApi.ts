import { baseApi } from '@/services'
import { EpisodesResponse, GetEpisodesType } from '@/services/episodes/types'

const episodesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getEpisodes: build.query<EpisodesResponse, GetEpisodesType>({
      query: ({ episode, id, name, page }) => ({
        method: 'GET',
        params: {
          episode,
          id,
          name,
          page,
        },
        url: `/episode`,
      }),
    }),
    // getMultipleEpisodes: build.query<Episode[], { ids: string }>({
    //   query: ({ ids }) => ({
    //     method: 'GET',
    //     url: `/episode/${ids}`,
    //   }),
    //   transformResponse: async (response: Episode[]) => {
    //     const data = await response
    //
    //     if (!Array.isArray(data)) {
    //       return [data]
    //     }
    //
    //     return data
    //   },
    // }),
    // getNextPageEpisodes: build.query<EpisodesResponse, number>({
    //   query: page => ({
    //     method: 'GET',
    //     url: `/episode?page=${page}`,
    //   }),
    // }),
    // getSingleEpisode: build.query<Episode, { id: number }>({
    //   query: ({ id }) => ({
    //     method: 'GET',
    //     url: `/episode/${id}`,
    //   }),
    // }),
  }),
})

export const { useGetEpisodesQuery } = episodesApi
