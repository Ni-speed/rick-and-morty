import styled from 'styled-components'

export const Status = styled.span<{ status: string }>`
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  border-radius: 50%;
  background: ${props => {
    switch (props.status) {
      case 'Alive':
        return 'rgb(85, 204, 68)'
      case 'Dead':
        return 'rgb(214, 61, 46)'
      case 'unknown':
        return 'rgb(158, 158, 158)'
      default:
        return 'transparent' // Цвет по умолчанию или пустой фон
    }
  }};
`
