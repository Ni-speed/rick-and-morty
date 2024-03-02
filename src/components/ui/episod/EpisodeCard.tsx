import { FC } from 'react'

import { Typography } from '@/components/ui'
import { useGetCharacterQuery } from '@/services/characters'
import { Episode } from '@/services/episodes'
import { Card } from '@/styles'

type EpisodeCardProps = {
  episode: Episode
}
export const EpisodeCard: FC<EpisodeCardProps> = ({ episode }) => {
  const characterId = episode.characters.map(character => {
    return character.replace('https://rickandmortyapi.com/api/character/', '')
  })

  const { data: characters, isLoading } = useGetCharacterQuery({ id: characterId })

  if (!characters || isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Card.EpisodeContainer>
      <Typography tag={'h2'} variant={'body1'}>
        Release date: {episode.air_date}
      </Typography>
      <Typography tag={'h2'} variant={'title2'}>
        {episode.episode} - {episode.name}
      </Typography>
      <Typography tag={'h2'} variant={'title2'}>
        Characters:
      </Typography>

      <Card.UL>
        {characters.map(character => (
          <Card.LI key={character.id}>{character.name}</Card.LI>
        ))}
      </Card.UL>
    </Card.EpisodeContainer>
  )
}
