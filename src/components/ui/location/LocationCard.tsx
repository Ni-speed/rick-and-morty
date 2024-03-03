import { FC } from 'react'

import { CharacterCard } from '@/components/ui'
import { STypography } from '@/components/ui/typography'
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

  if (!characters || isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Card.LocationContainer>
      <STypography.H2>
        {location.type} - {location.name}
      </STypography.H2>
      <STypography.H2>Dimension : {location.dimension}</STypography.H2>
      {location.residents.length ? (
        <Card.ResidentsDescription>
          <STypography.H2>Residents:</STypography.H2>
          <Card.UL>
            {characters.map(character => {
              return <CharacterCard $transform character={character} key={character.id} />
            })}
          </Card.UL>
        </Card.ResidentsDescription>
      ) : (
        <STypography.H3>No Residents</STypography.H3>
      )}
    </Card.LocationContainer>
  )
}
