import { FC } from 'react'

import { SC } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, Typography } from '@/components/ui'
import { useGetCharacterQuery } from '@/services/characters'
import { Episode } from '@/services/episodes'
import { Card } from '@/styles'

type EpisodeCardProps = {
  episode: Episode
}
export const EpisodeCard: FC<EpisodeCardProps> = ({ episode }) => {
  const characterId = episode.characters.map((character, index) => {
    return character.replace('https://rickandmortyapi.com/api/character/', '')
  })

  console.log(characterId)

  const { data: characters } = useGetCharacterQuery({ id: characterId })

  return (
    <Card.EpisodeConteiner>
      <div>
        <Typography tag={'span'} variant={'body1'}>
          {new Date(episode.air_date).toLocaleDateString('en-US')}
        </Typography>
        <Typography tag={'h2'} variant={'title2'}>
          {episode.episode} - {episode.name}
        </Typography>
        <Typography tag={'h2'} variant={'title2'}>
          Characters:
        </Typography>
        {/*<SC.UL>*/}
        {characters?.map(character => <li key={character.id}>{character.name}</li>)}
        {/*</SC.UL>*/}
      </div>
    </Card.EpisodeConteiner>
  )
}
