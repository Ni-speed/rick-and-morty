import { FC, ReactNode } from 'react'

import { SelectArrow } from '@/assets'
import { SSelect } from '@/components/ui/select/SuperSelect.styled'
import * as Select from '@radix-ui/react-select'

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
  <SSelect.LabelRoot>
    <Select.Root
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
      required={required}
      value={value}
    >
      <SSelect.SelectTrigger aria-label={label} asChild tabIndex={1}>
        <div>
          <Select.Value placeholder={placeholder} />
          <SelectArrow />
        </div>
      </SSelect.SelectTrigger>
      <Select.Portal>
        <SSelect.SelectContent position={'popper'} sideOffset={-1}>
          <Select.Viewport>
            {options.map(el => (
              <SSelect.SelectItem key={el.value} value={el.value}>
                <Select.ItemText>{el.value}</Select.ItemText>
              </SSelect.SelectItem>
            ))}
          </Select.Viewport>
        </SSelect.SelectContent>
      </Select.Portal>
    </Select.Root>
  </SSelect.LabelRoot>
)
