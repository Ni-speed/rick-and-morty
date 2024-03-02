import { FC } from 'react'

import { CharacterStatus, Typography } from '@/components/ui'
import { Character } from '@/services/characters'
import { Card } from '@/styles'

type CharacterCardProps = {
  character: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card.CharacterContainer>
      <div>
        <Card.Image alt={character.name} src={character.image} />
      </div>
      <Card.Description>
        <div>
          <Typography tag={'h2'} variant={'title2'}>
            {character.name}
          </Typography>

          <CharacterStatus species={character.species} status={character.status} />
        </div>
        <Card.Location>
          <Typography tag={'span'} variant={'title1'}>
            Last known location:
          </Typography>

          <Typography tag={'span'} variant={'body1'}>
            {character.location.name}
          </Typography>
        </Card.Location>

        <Card.Location>
          <Typography tag={'span'} variant={'title1'}>
            First seen in:
          </Typography>
          <Typography tag={'span'} variant={'body1'}>
            {character.location.name}
          </Typography>
        </Card.Location>
      </Card.Description>
    </Card.CharacterContainer>
  )
}
