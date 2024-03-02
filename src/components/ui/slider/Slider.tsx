import { ElementRef, FC, forwardRef } from 'react'

import { Typography } from '@/components/ui'
import * as SliderRadix from '@radix-ui/react-slider'

type SliderProps = SliderRadix.SliderProps & {
  label: string
  multiple?: boolean
  value: number[]
}

export const Slider: FC<SliderProps> = forwardRef<ElementRef<typeof SliderRadix.Root>, SliderProps>(
  ({
    disabled,
    label,
    max = 100,
    min = 0,
    multiple,
    onValueChange,
    onValueCommit,
    step = 1,
    value,
  }) => {
    const handleInputChange = (index: number, inputValue: string) => {
      const newValue = [...value]
      const parsedValue = Number(inputValue)

      if (!isNaN(parsedValue) && parsedValue >= min && parsedValue <= max) {
        newValue[index] = parsedValue
        onValueChange!(newValue)
      }
    }

    return (
      <div>
        <Typography variant={'body2'}>{label}</Typography>
        <div>
          {value.length !== 1 && (
            <input
              onChange={e => handleInputChange(0, e.target.value)}
              type={'number'}
              value={value[0]}
            />
          )}
          <SliderRadix.Root
            disabled={disabled}
            max={max}
            min={min}
            onValueChange={newValue => onValueChange!(newValue)}
            onValueCommit={onValueCommit}
            step={step}
            value={value}
          >
            <SliderRadix.Track>
              <SliderRadix.Range />
            </SliderRadix.Track>
            <SliderRadix.Thumb />
            {multiple && <SliderRadix.Thumb />}
          </SliderRadix.Root>
          <input
            onChange={e => handleInputChange(1, e.target.value)}
            type={'number'}
            value={value.length === 1 ? value[0] : value[1]}
          />
        </div>
      </div>
    )
  }
)
