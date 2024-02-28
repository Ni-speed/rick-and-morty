import { Typography } from '@/components/ui'
import { TypographyProps } from '@/components/ui/typography/Typography'
import { Theme } from '@/styles/Theme.styled'
import styled from 'styled-components'

export const StyledTypography = styled(Typography)<TypographyProps>`
  &.body1 {
    font-size: 16px;
    /* Другие стили для body1 */
  }

  &.body2 {
    font-size: 14px;
    /* Другие стили для body2 */
  }

  &.h1 {
    font-size: 240px;
    color: red;
    /* Другие стили для h1 */
  }

  &.h2 {
    font-size: 20px;
    /* Другие стили для h2 */
  }

  &.h3 {
    font-size: 18px;
    /* Другие стили для h3 */
  }

  &.large {
    font-size: 28px;
    /* Другие стили для большого текста */
  }

  &.title {
    font-size: 5.625rem;
    font-weight: ${Theme.typography.fontWeights.Bold};
    color: red;
    /* Другие стили для заголовка */
  }
  /* Добавьте стили для других вариантов типографики по аналогии */
`
