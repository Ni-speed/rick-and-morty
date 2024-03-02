import { styled } from 'styled-components'
const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: stretch;
  gap: 50px;
  padding: 15px;
  width: 25%;
`
const Section = styled.section`
  display: flex;
`
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
  justify-content: space-around;
`
const Select = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SC = {
  Filter,
  NavBar,
  Section,
  Select,
  UL,
}
