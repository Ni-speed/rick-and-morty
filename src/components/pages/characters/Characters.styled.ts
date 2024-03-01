import { styled } from 'styled-components'

const UL = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
`
const Filter = styled.div`
  display: flex;
  gap: 40px;
`

export const SC = {
  Filter,
  UL,
}
