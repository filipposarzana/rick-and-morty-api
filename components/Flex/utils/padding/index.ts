import { css } from 'styled-components'
import { Spacing } from '~/tokens/spacing'

export type Padding = {
  p: Spacing
  pb: Spacing
  pl: Spacing
  pr: Spacing
  pt: Spacing
  px: Spacing
  py: Spacing
}

export type PaddingProps = Partial<Padding>

const switchProp = (prop: keyof Padding, value: Padding[keyof Padding]) => {
  switch (prop) {
    case 'p':
      return `padding: ${value}px;`
    case 'pb':
      return `padding-bottom: ${value}px;`
    case 'pl':
      return `padding-left: ${value}px;`
    case 'pr':
      return `padding-right: ${value}px;`
    case 'pt':
      return `padding-top: ${value}px;`
    case 'px':
      return `
        padding-left: ${value}px;
        padding-right: ${value}px;
      `
    case 'py':
      return `
        padding-bottom: ${value}px;
        padding-top: ${value}px;
      `
    default:
      return ''
  }
}

const getPropStyle = <P extends keyof Padding>(prop: P, value?: Padding[P]) => {
  if (value === undefined) {
    return ''
  }

  return switchProp(prop, value)
}

export const padding = css<PaddingProps>`
  ${({ p, pb, pl, pr, pt, px, py }) => `
    ${getPropStyle('p', p)}
    ${getPropStyle('px', px)}
    ${getPropStyle('py', py)}
    ${getPropStyle('pb', pb)}
    ${getPropStyle('pl', pl)}
    ${getPropStyle('pr', pr)}
    ${getPropStyle('pt', pt)}
  `}
`
