import { css } from 'styled-components'
import { colors, ColorName } from '~/tokens/colors'
import { SizeInt } from '~/types'
import { transition } from '~/utils/ui/transition'

type BorderRadiusDirection = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'

export type Border = {
  borderColorName?: ColorName
  borderSize?: number
  borderRadiusBottomLeft?: SizeInt
  borderRadiusBottomRight?: SizeInt
  borderRadiusTopLeft?: SizeInt
  borderRadiusTopRight?: SizeInt
}

type GetBorderProps = Pick<Border, 'borderColorName' | 'borderSize'>

type GetBorderRadiusProps = {
  borderRadius?: SizeInt
  prop: BorderRadiusDirection
}

const getBorder = ({ borderColorName, borderSize }: GetBorderProps) => {
  if (borderColorName === undefined || borderSize === undefined) {
    return ''
  }

  return `
    border: ${borderSize}px solid ${colors[borderColorName]};

    ${transition({
      duration: 300,
      properties: ['border'],
    })}
  `
}

const getBorderRadius = ({ borderRadius, prop }: GetBorderRadiusProps) => {
  if (borderRadius === undefined) {
    return ''
  }

  return `border-${prop}-radius: ${borderRadius}px;`
}

export const border = css<Border>`
  ${({
    borderColorName,
    borderSize,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    borderRadiusTopLeft,
    borderRadiusTopRight,
  }) => `
    ${getBorder({ borderColorName, borderSize })}
    ${getBorderRadius({ borderRadius: borderRadiusBottomLeft, prop: 'bottom-left' })}
    ${getBorderRadius({ borderRadius: borderRadiusBottomRight, prop: 'bottom-right' })}
    ${getBorderRadius({ borderRadius: borderRadiusTopLeft, prop: 'top-left' })}
    ${getBorderRadius({ borderRadius: borderRadiusTopRight, prop: 'top-right' })}
  `}

  overflow: hidden;
`
