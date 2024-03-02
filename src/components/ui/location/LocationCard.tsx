import { FC } from 'react'

import { Typography } from '@/components/ui'
import { useGetCharacterQuery } from '@/services/characters'
import { Location } from '@/services/location'
import { Card } from '@/styles'

type EpisodeCardProps = {
  location: Location
}
export const LocationCard: FC<EpisodeCardProps> = ({ location }) => {
  const characterId = location.residents.map(resident => {
    return resident.replace('https://rickandmortyapi.com/api/character/', '')
  })

  const { data: characters, isLoading } = useGetCharacterQuery({ id: characterId })

  console.log(characters)
  if (!characters || isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Card.LocationContainer>
      <Typography tag={'h2'} variant={'title2'}>
        {location.type} - {location.name}
      </Typography>
      <Typography tag={'h2'} variant={'title2'}>
        Dimension : {location.dimension}
      </Typography>
      {location.residents.length ? (
        <Typography tag={'h2'} variant={'title2'}>
          Residents:
        </Typography>
      ) : (
        <Typography tag={'h2'} variant={'title2'}>
          No Residents
        </Typography>
      )}

      <Card.UL>
        {characters.map(character => {
          return <Card.LI key={character.id}>{character.name}</Card.LI>
        })}
      </Card.UL>
    </Card.LocationContainer>
  )
}
