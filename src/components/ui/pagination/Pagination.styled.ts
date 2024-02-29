import { Theme } from '@/styles/Theme.styled'
import { styled } from 'styled-components'

const Root = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  gap: 12px;
  list-style-type: none;
`

const Item = styled.button<{ $isDisabled?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: ${Theme.colors.warning.warning500};
  border-radius: 4px;

  &:focus-visible {
    outline: ${Theme.colors.info.info900};
    stroke: ${Theme.colors.info.info900};
    stroke-width: 2px;
  }

  cursor: ${({ $isDisabled }) => ($isDisabled ? 'initial' : 'pointer')};
  color: ${({ $isDisabled }) => ($isDisabled ? '#8c61ff' : '${Theme.colors.warning.warning500}')};

  &:hover:not(:disabled) {
    background-color: ${Theme.colors.warning.warning500};
    color: ${Theme.colors.dark.dark900};
    box-shadow: 0 -4px 20px rgba(274, 144, 0, 0.5);
  }
`

const Dots = styled.span`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: ${Theme.colors.warning.warning500};
  border-radius: 4px;
`

const PageButton = styled.button<{ $isSelected?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: ${Theme.colors.warning.warning500};
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${Theme.typography.fontWeights.Bold};

  &:focus-visible {
    outline: ${Theme.colors.info.info900};
    stroke: ${Theme.colors.info.info900};
    stroke-width: 2px;
  }

  &:disabled {
    cursor: initial;
    opacity: 1;
  }

  &:hover:not(:disabled) {
    background-color: ${Theme.colors.warning.warning500};
    color: ${Theme.colors.dark.dark900};
    box-shadow: 0 -4px 20px rgba(274, 144, 0, 0.5);
  }

  color: ${({ $isSelected }) => ($isSelected ? '#8c61ff' : '${Theme.colors.warning.warning500}')};
`

export const SP = {
  Container,
  Dots,
  Item,
  PageButton,
  Root,
}
