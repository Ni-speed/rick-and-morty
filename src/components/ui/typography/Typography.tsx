import { FC } from 'react'

type TypographyProps = {
  children: string
  tag?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span'
  variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'large' | 'title'
}
export const Typography: FC<TypographyProps> = ({ children, tag = 'div', variant }) => {
  const Component = tag

  return <Component className={variant}>{children}</Component>
}
