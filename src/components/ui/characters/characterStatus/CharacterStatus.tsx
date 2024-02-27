import { FC } from 'react'

import { Typography } from '@/components/ui'
import { Status } from '@/components/ui/characters/characterStatus/CharacterStatus.styled'
import { CharactersResponseResults } from '@/services/characters/types'

type CharacterStatusProps = {
  species: CharactersResponseResults['species']
  status: CharactersResponseResults['status']
}

export const CharacterStatus: FC<CharacterStatusProps> = ({ species, status }) => (
  <Typography tag={'span'} variant={'body2'}>
    <Status status={status} />
    {status} - {species}
  </Typography>
)
