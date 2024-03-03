import { FC } from 'react'

import { CharacterCard } from '@/components/ui'
import { STypography } from '@/components/ui/typography'
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
      <STypography.H2>Release date: {episode.air_date}</STypography.H2>
      <STypography.H2>
        {episode.episode} - {episode.name}
      </STypography.H2>
      <STypography.H2>Characters:</STypography.H2>

      <Card.UL>
        {characters.map(character => {
          return <CharacterCard $transform character={character} key={character.id} />
        })}
      </Card.UL>
    </Card.EpisodeContainer>
  )
}
