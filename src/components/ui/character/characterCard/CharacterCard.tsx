import { FC } from 'react'

import { CharacterStatus, Typography } from '@/components/ui'
import { Character } from '@/services/characters'

import { ChrC } from './CharacterCard.styled'

type CharacterCardProps = {
  character: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <ChrC.CharacterContainer>
      <div>
        <ChrC.Image alt={character.name} src={character.image} />
      </div>
      <ChrC.DescriptionContainer>
        <div>
          <Typography tag={'h1'} variant={'title2'}>
            <a href={``}>{character.name}</a>
          </Typography>

          <CharacterStatus species={character.species} status={character.status} />
        </div>
        <ChrC.Location>
          <Typography tag={'span'} variant={'title1'}>
            Last known location:
          </Typography>

          <Typography tag={'span'} variant={'body1'}>
            <a href={'#'}>{character.location.name}</a>
          </Typography>
        </ChrC.Location>
        <div>
          <Typography tag={'span'} variant={'title1'}>
            First seen in:
          </Typography>
          <Typography tag={'span'} variant={'body1'}>
            <a href={'#'}>{character.location.name}</a>
          </Typography>
        </div>
      </ChrC.DescriptionContainer>
      {/*<Episodes episodes={character.episode} />*/}
    </ChrC.CharacterContainer>
  )
}
