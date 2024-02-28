import { FC } from 'react'

import { Typography } from '@/components/ui'
import { Episode } from '@/services/episodes'

type EpisodeCardProps = {
  episode: Episode
}
export const EpisodeCard: FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div>
      <div>
        <Typography tag={'span'} variant={'body1'}>
          {new Date(episode.air_date).toLocaleDateString('en-US')}
        </Typography>
        <Typography tag={'h2'} variant={'title2'}>
          {/*<Link prefetch={false} href={`${ROUTES.EPISODE}/${episode.id}`}>*/}
          {/*    {episode.episode} - {episode.name}*/}
          {/*</Link>*/}
          {episode.episode} - {episode.name}
        </Typography>
      </div>
    </div>
  )
}
