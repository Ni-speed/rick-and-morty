import { FC } from 'react'

import { Typography } from '@/components/ui'
import { Status } from '@/components/ui/character/characterStatus/CharacterStatus.styled'
import { Character } from '@/services/characters/types'

type CharacterStatusProps = {
  species: Character['species']
  status: Character['status']
}

export const CharacterStatus: FC<CharacterStatusProps> = ({ species, status }) => (
  <Typography tag={'span'} variant={'body2'}>
    <Status $status={status} />
    {status} - {species}
  </Typography>
)
