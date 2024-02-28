import { FC } from 'react'

import { Typography } from '@/components/ui'
import { Location } from '@/services/location/types'

type LocationCardProps = {
  location: Location
}
export const LocationCard: FC<LocationCardProps> = ({ location }) => {
  return (
    <div>
      <div>
        <Typography tag={'span'} variant={'body1'}>
          {location.dimension}
        </Typography>
        <Typography tag={'h2'} variant={'title2'}>
          {/*<Link href={`${ROUTES.LOCATION}/${location.id}`} prefetch={false}>*/}
          {location.name} - {location.type}
          {/*</Link>*/}
        </Typography>
      </div>
    </div>
  )
}
