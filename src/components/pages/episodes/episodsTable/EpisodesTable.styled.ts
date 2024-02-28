import { styled } from 'styled-components'

const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Header = styled.th`
  background-color: #850404;
  padding: 8px;
  text-align: left;
`

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #397df6;
  }
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
