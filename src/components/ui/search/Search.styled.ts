import { Theme } from '@/styles/Theme.styled'
import { styled } from 'styled-components'
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  width: 40%;
  padding: 6 12;
`
export const Input = styled.input`
  all: unset;
  width: 40%;
  border-radius: 10px;
  border: 2px solid ${Theme.colors.warning.warning500};
  padding: 10px 15px;
  color: ${Theme.colors.warning.warning500};
  font-weight: ${Theme.typography.fontWeights.Bold};
  &:focus {
    outline: none;
  }
`
export const Button = styled.button`
  background: transparent;
  color: ${Theme.colors.warning.warning500};
  border: 2px solid ${Theme.colors.warning.warning500};
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background: ${Theme.colors.warning.warning500};
    color: ${Theme.colors.dark.dark900};
    box-shadow: 0 -4px 20px rgba(274, 144, 0, 0.5);
  }
`
