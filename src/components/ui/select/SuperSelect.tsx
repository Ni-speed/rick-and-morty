import { FC, ReactNode } from 'react'

import { SelectArrow } from '@/assets'
import * as Label from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'

import { Typography } from '../typography'

export type SelectPropsType = {
  classname?: string
  defaultValue?: any
  disabled?: boolean
  label?: string
  onValueChange?: (value: any) => void
  options: any[]
  placeholder?: ReactNode
  required?: boolean
  value?: string
}

export const SuperSelect: FC<SelectPropsType> = ({
  defaultValue,
  disabled,
  label,
  onValueChange,
  options,
  placeholder,
  required,
  value,
}) => (
  <Label.Root>
    <Typography tag={'label'} variant={'body2'}>
      {label}
    </Typography>
    <Select.Root
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
      required={required}
      value={value}
    >
      <Select.Trigger asChild tabIndex={1}>
        <div>
          <Select.Value placeholder={placeholder} />
          <SelectArrow />
        </div>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position={'popper'} sideOffset={-1}>
          <Select.Viewport>
            {options.map(el => (
              <Select.Item key={el.value} value={el.value}>
                <Select.ItemText>{el.value}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </Label.Root>
)
