import { Theme } from '@/styles/Theme.styled'
import * as Label from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'
import { styled } from 'styled-components'

const LabelRoot = styled(Label.Root)`
  color: ${Theme.colors.warning.warning500};
  font-weight: ${Theme.typography.fontWeights.Bold};
`
const SelectTrigger = styled(Select.Trigger)`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.37rem 0.75rem;

  border: 2px solid ${Theme.colors.warning.warning500};
  border-radius: 10px;
  &:focus,
  &:focus-visible {
    border: transparent;
    outline: 2px solid ${Theme.colors.accent.accent700};
  }

  &[data-state='open'] {
    border-color: ${Theme.colors.accent.accent700};
    border-radius: 10px 10px 0 0;
  }

  &:hover {
    background: ${Theme.colors.warning.warning500};
    color: ${Theme.colors.dark.dark900};
    box-shadow: 0 -4px 20px rgba(274, 144, 0, 0.5);
  }
`
const SelectContent = styled(Select.Content)`
  width: var(--radix-select-trigger-width);
  border: 2px solid ${Theme.colors.warning.warning500};
  border-radius: 0 0 10px 10px;
`
const SelectItem = styled(Select.Item)`
  cursor: pointer;
  padding: 0.3rem 0.3rem;
  outline: none;
  transition: 0.2s ease-out;

  &:hover,
  &:focus-visible {
    color: ${Theme.colors.warning.warning500};
    background-color: ${Theme.colors.dark.dark900};
  }
`

export const SSelect = {
  LabelRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
}
