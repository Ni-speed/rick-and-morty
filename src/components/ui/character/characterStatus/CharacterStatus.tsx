import { FC } from 'react'

import { Status } from '@/components/ui/character/characterStatus/CharacterStatus.styled'
import { STypography } from '@/components/ui/typography'
import { Character } from '@/services/characters'

type CharacterStatusProps = {
  species: Character['species']
  status: Character['status']
}

export const CharacterStatus: FC<CharacterStatusProps> = ({ species, status }) => (
  <STypography.Span>
    <Status $status={status} />
    {status} - {species}
  </STypography.Span>
)
