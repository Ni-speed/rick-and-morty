import { SPage } from '@/components/pages/startPage/StartPage.style'

export const StartPage = () => {
  return (
    <SPage.Container>
      <div>
        <SPage.StyledLink to={'/characters'}>Character</SPage.StyledLink>
        <SPage.StyledLink to={'/locations'}>Location</SPage.StyledLink>
        <SPage.StyledLink to={'/episodes'}>Episode</SPage.StyledLink>
      </div>
    </SPage.Container>
  )
}
