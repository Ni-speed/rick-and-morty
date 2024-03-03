import { Theme } from '@/styles/Theme.styled'
import { styled } from 'styled-components'

const BaseContainer = styled.div`
  display: flex;
  background: ${Theme.colors.dark.dark300};
  transition: transform 0.3s ease-in-out;
  transform: translate(-50%, -50%) scale(1.02);
  overflow-y: auto;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
`
const CharacterContainer = styled(BaseContainer)<{ $transform?: boolean }>`
  width: 500px;
  height: 220px;
  overflow: hidden;
  transform: ${props => (props.$transform ? 'none' : 'translate(-50%, -50%)')};
`
const EpisodeContainer = styled(BaseContainer)`
  width: 1190px;
  max-height: 700px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-y: auto;
`
const LocationContainer = styled(EpisodeContainer)`
  overflow-y: auto;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
`

const Description = styled.div`
  position: relative;
  padding: 0.75rem;
  color: ${Theme.colors.light.light100};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Location = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const UL = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  transform: none;
`
const LI = styled.li`
  list-style: none;
`
const ResidentsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Card = {
  CharacterContainer,
  Description,
  EpisodeContainer,
  Image,
  LI,
  Location,
  LocationContainer,
  ResidentsDescription,
  UL,
}
