import { ComponentType, ReactNode } from 'react'
import { css, StyledComponent } from 'styled-components'
import { colors, ColorName } from '~/tokens/colors'
import { disabled } from '~/utils/ui'
import { FontStyle, typographyFlavours, TypographyKind } from '~/tokens/typography'

export type TypographyProps = {
  children: ReactNode
  colorName?: ColorName
  ellipsis?: boolean
  fontStyle?: FontStyle
  kind?: TypographyKind
}

export type TextType = StyledComponent<ComponentType<TypographyProps>, any, TypographyProps, never>

const getTypographyKind = ({ kind = 'bodyM' }: Pick<TypographyProps, 'kind'>) => {
  const flavour = typographyFlavours[kind]

  return `
    font-size: ${flavour.fontSize}px;
    font-weight: ${flavour.fontWeight};
    line-height: ${flavour.lineHeight}px;
  `
}

export const baseTypographyStyle = css<TypographyProps>`
  ${disabled}
  ${getTypographyKind}

  color: ${({ colorName }) => colors[colorName]};
  font-style: ${({ fontStyle = 'normal' }) => fontStyle};
  text-align: ${({ align = 'left' }) => align};
`
