import { css } from 'styled-components'
import { ColorName, colors } from '~/tokens/colors'
import { SizeInt } from '~/types'

type Border = {
  borderColor: ColorName
  borderRadius: SizeInt
  borderRadiusBottomLeft: SizeInt
  borderRadiusBottomRight: SizeInt
  borderRadiusTopLeft: SizeInt
  borderRadiusTopRight: SizeInt
  borderSize: SizeInt
}

export type BorderProps = Partial<Border>

const switchProp = (prop: keyof Border, value: Border[keyof Border]) => {
  switch (prop) {
    case 'borderColor':
      return `border-color: ${colors[value as Border['borderColor']]};`
    case 'borderRadius':
      return `border-radius: ${value}px;`
    case 'borderRadiusBottomLeft':
      return `border-bottom-left-radius: ${value}px;`
    case 'borderRadiusBottomRight':
      return `border-bottom-right-radius: ${value}px;`
    case 'borderRadiusTopLeft':
      return `border-top-left-radius: ${value}px;`
    case 'borderRadiusTopRight':
      return `border-top-right-radius: ${value}px;`
    case 'borderSize':
      return `
        border-style: solid;
        border-width: ${value}px;
      `
    default:
      return ''
  }
}

const getPropStyle = <P extends keyof Border>(prop: P, value?: Border[P]) => {
  if (value === undefined) {
    return ''
  }

  return `
    overflow: hidden;

    ${switchProp(prop, value)}
  `
}

export const border = css<BorderProps>`
  ${({
    borderColor,
    borderRadius,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderSize,
  }) => `
    ${getPropStyle('borderColor', borderColor)}
    ${getPropStyle('borderRadius', borderRadius)}
    ${getPropStyle('borderRadiusBottomLeft', borderRadiusBottomLeft)}
    ${getPropStyle('borderRadiusBottomRight', borderRadiusBottomRight)}
    ${getPropStyle('borderRadiusTopLeft', borderRadiusTopLeft)}
    ${getPropStyle('borderRadiusTopRight', borderRadiusTopRight)}
    ${getPropStyle('borderSize', borderSize)}
  `}
`
