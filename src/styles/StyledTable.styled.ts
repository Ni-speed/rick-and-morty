import { Theme } from '@/styles/Theme.styled'
import { styled } from 'styled-components'

const Wrapper = styled.table`
  width: 75%;
  border-collapse: collapse;
  padding-left: 5px;
`

const Header = styled.th`
  background-color: ${Theme.colors.accent.accent900};
  padding: 8px;
  text-align: left;
`

const Row = styled.tr`
  &:nth-child(even) {
    background-color: ${Theme.colors.accent.accent900};
  }
  cursor: pointer;
`

const Cell = styled.td`
  padding: 8px;
`

export const Table = {
  Cell,
  Header,
  Row,
  Wrapper,
}
