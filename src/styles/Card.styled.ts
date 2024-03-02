import { Theme } from '@/styles/Theme.styled'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: ${Theme.colors.dark.dark300};
  transition: transform 0.3s ease-in-out;
  transform: translate(-50%, -50%) scale(1.02);
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
`
const EpisodeConteiner = styled.div`
  width: 1190px;
  height: 700px;
  display: flex;
  overflow: hidden;
  background: ${Theme.colors.dark.dark300};
  transition: transform 0.3s ease-in-out;
  transform: translate(-50%, -50%) scale(1.02);
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
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

export const Card = {
  Container,
  Description,
  EpisodeConteiner,
  Image,
  Location,
}
