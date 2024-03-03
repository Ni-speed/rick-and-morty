import { FC } from 'react'

import { CharacterStatus } from '@/components/ui'
import { STypography } from '@/components/ui/typography'
import { Character } from '@/services/characters'
import { Card } from '@/styles'

type CharacterCardProps = {
  $transform?: boolean
  character: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({ $transform, character }) => {
  return (
    <Card.CharacterContainer $transform={$transform}>
      <div>
        <Card.Image alt={character.name} src={character.image} />
      </div>
      <Card.Description>
        <div>
          <STypography.H2>{character.name}</STypography.H2>

          <CharacterStatus species={character.species} status={character.status} />
        </div>
        <Card.Location>
          <STypography.SpanText>Last known location:</STypography.SpanText>

          <STypography.H3>{character.location.name}</STypography.H3>
        </Card.Location>

        <Card.Location>
          <STypography.SpanText>First seen in:</STypography.SpanText>
          <STypography.H3>{character.location.name}</STypography.H3>
        </Card.Location>
      </Card.Description>
    </Card.CharacterContainer>
  )
}
