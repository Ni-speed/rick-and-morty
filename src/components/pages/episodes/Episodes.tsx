import { FC } from 'react'

import { Character } from '@/services/characters'
import { useGetMultipleEpisodesQuery } from '@/services/episodes'

type EpisodesProps = {
  episodes: Character['episode']
}
export const Episodes: FC<EpisodesProps> = ({ episodes }) => {
  const { data } = useGetMultipleEpisodesQuery({
    ids: episodes
      .map(episodeLink => episodeLink.replace('https://rickandmortyapi.com/api/episode/', ''))
      .join(','),
  })

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data.map(episode => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </div>
  )
}
