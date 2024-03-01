import { styled } from 'styled-components'

const Background = styled.div`
  cursor: pointer;

  position: fixed;
  top: 0;
  left: 0;

  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);
`
const Card = styled.div`
  position: relative;

  //width: 1190px;
  //height: 720px;

  //background: #771010 no-repeat center;
  background-size: cover;
  border: none;
  border-radius: 10px;
`
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

export const SModal = {
  Background,
  Card,
  Content,
}
