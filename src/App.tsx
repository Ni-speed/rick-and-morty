import { Button } from '@/components/ui/button'
import { BS } from '@/components/ui/button/Button.styled'
import styled from 'styled-components'

export function App() {
  return (
    <>
      <Button text={'asdfsdf'} />
      <BS.SecondaryButton>Secondary</BS.SecondaryButton>
      <StyleDiv>Hello</StyleDiv>
    </>
  )
}

const StyleDiv = styled.div`
  color: red;
`
