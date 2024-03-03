import { Link } from 'react-router-dom'

import { Theme } from '@/styles'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: ${Theme.typography.fontSizes.XXXL};
`

const StyledLink = styled(Link)`
  margin: 0 10px;
`

export const SPage = { Container, StyledLink }
