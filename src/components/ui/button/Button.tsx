import { FC } from 'react'

import { BS } from '@/components/ui/button/Button.styled'

type Props = {
  text: string
}
export const Button: FC<Props> = ({ text }) => {
  return <BS.PrimaryButton>{text}</BS.PrimaryButton>
}
