import { Theme } from '@/styles'
import { styled } from 'styled-components'

const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: ${Theme.typography.fontWeights.Bold};
  padding: 15px;
  margin: 0 auto;
`
const H2 = styled.h2`
  font-size: 1.5rem;
`
const H3 = styled.h3`
  font-size: 18px;
  font-weight: ${Theme.typography.fontWeights.Regular};
`
const Span = styled.span`
  text-transform: capitalize;
  font-weight: ${Theme.typography.fontWeights.Medium};
`
const SpanText = styled.span`
  color: ${Theme.colors.dark.dark100};
  font-weight: ${Theme.typography.fontWeights.Medium};
`

export const STypography = {
  H1,
  H2,
  H3,
  Span,
  SpanText,
}
