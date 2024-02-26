import { Theme } from '@/styles/Theme.styled'
import styled from 'styled-components'

const BaseButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 1.75rem;
  font-size: ${Theme.typography.fontSizes.S};
  font-weight: ${Theme.typography.fontWeights.Bold};
  line-height: ${Theme.typography.lineHeight.M};
  color: ${Theme.colors.light.light100};
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 0.25rem;
  &:focus-visible,
  &:focus {
    outline: 2px solid ${Theme.colors.info.info700};
  }
`

const PrimaryButton = styled(BaseButton)`
  background-color: ${Theme.colors.accent.accent500};
  box-shadow: 0 4px 18px 0 rgb(140 97 255 / 35%);
  &:hover {
    background-color: ${Theme.colors.accent.accent300};
  }
  &:focus {
    background-color: ${Theme.colors.accent.accent500};
  }
  &:active {
    background-color: ${Theme.colors.accent.accent700};
  }
  &:disabled {
    background-color: ${Theme.colors.accent.accent900};
  }
`

export const SecondaryButton = styled(BaseButton)`
  background-color: ${Theme.colors.dark.dark500};
  box-shadow: 0 4px 4px 0 rgb(77 86 96 / 13%);
  &:hover {
    background-color: ${Theme.colors.dark.dark100};
  }
  &:focus {
    background-color: ${Theme.colors.dark.dark300};
    border: 2px solid ${Theme.colors.info.info700};
  }
  &:active {
    background-color: ${Theme.colors.dark.dark500};
  }
  &:disabled {
    background-color: ${Theme.colors.dark.dark300};
  }
`

const TertiaryButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.accent.accent500};
  border: 1px solid ${({ theme }) => theme.colors.accent.accent500};
  &:disabled {
    color: ${({ theme }) => theme.colors.accent.accent900};
    border: 1px solid ${({ theme }) => theme.colors.accent.accent900};
  }
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.dark.dark700};
  }
  &:not(:disabled):focus {
    font-size: ${({ theme }) => theme.typography.fontSizes.M};
    border: none;
  }
  &:not(:disabled):active {
    color: ${({ theme }) => theme.colors.accent.accent500};
    background-color: ${({ theme }) => theme.colors.accent.accent900};
  }
`

const LinkButton = styled(BaseButton)`
  font-size: ${({ theme }) => theme.typography.fontSizes.M};
  color: ${({ theme }) => theme.colors.accent.accent500};
  &:hover {
    color: ${({ theme }) => theme.colors.accent.accent300};
  }
  &:focus {
    border-radius: 8.125rem;
  }
  &:active {
    color: ${({ theme }) => theme.colors.accent.accent700};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.accent.accent900};
  }
`

export const BS = {
  LinkButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
}
