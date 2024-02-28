import { Theme } from '@/styles/Theme.styled'
import { styled } from 'styled-components'
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`
export const Input = styled.input`
  all: unset;
  width: 40%;
  border-radius: 8px;
  border: 2px solid ${Theme.colors.warning.warning500};
  padding: 10px 15px;
  color: ${Theme.colors.warning.warning500};
  //font-weight: ${Theme.typography.fontWeights.Bold};
  &:focus {
    outline: none;
  }
`
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`
