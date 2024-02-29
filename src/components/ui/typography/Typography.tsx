import { FC, ReactNode } from 'react'

export type TypographyProps = {
  children: ReactNode
  tag?: 'div' | 'h1' | 'h2' | 'h3' | 'label' | 'p' | 'span'
  variant?:
    | 'banner'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'title1'
    | 'title2'
}
export const Typography: FC<TypographyProps> = ({ children, tag = 'div', variant }) => {
  const Component = tag

  return <Component>{children}</Component>
}
