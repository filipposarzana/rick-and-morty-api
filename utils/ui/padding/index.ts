import { css } from 'styled-components'
import { Spacing } from '~/tokens/spacing'

export type Padding = {
  paddingBottom?: Spacing
  paddingLeft?: Spacing
  paddingRight?: Spacing
  paddingTop?: Spacing
}

const getPadding = (prop: 'bottom' | 'left' | 'right' | 'top', value?: Spacing) =>
  value === undefined ? '' : `padding-${prop}: ${value}px;`

export const padding = css`
  ${({ paddingBottom, paddingLeft, paddingRight, paddingTop }: Padding) => `
    ${getPadding('bottom', paddingBottom)}
    ${getPadding('left', paddingLeft)}
    ${getPadding('right', paddingRight)}
    ${getPadding('top', paddingTop)}
  `}
`
