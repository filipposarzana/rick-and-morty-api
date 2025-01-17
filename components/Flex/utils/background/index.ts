import { css } from 'styled-components'
import { ColorName, colors } from '~/tokens/colors'

export type BackgroundProps = {
  background?: ColorName
}

export const background = css<BackgroundProps>`
  ${({ background: backgroundColorName }) => backgroundColorName && `background-color: ${colors[backgroundColorName]};`}
`
