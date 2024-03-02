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
  }),
})

export const { useGetEpisodesQuery } = episodesApi
