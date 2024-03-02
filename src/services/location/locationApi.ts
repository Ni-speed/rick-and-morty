import { baseApi } from '@/services'
import { GetLocationsType, LocationsResponse } from '@/services/location/types'

const locationApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getLocations: build.query<LocationsResponse, GetLocationsType>({
      query: ({ dimension, episode, id, name, page, type }) => ({
        method: 'GET',
        params: {
          dimension,
          episode,
          id,
          name,
          page,
          type,
        },
        url: '/location',
      }),
    }),
  }),
})

export const { useGetLocationsQuery } = locationApi
