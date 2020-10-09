import { css } from 'styled-components'
import { colors, ColorName } from '~/tokens/colors'
import { transition } from '~/utils/ui'

export type Background = {
  backgroundColorName?: ColorName
}

export const background = css`
  ${({ backgroundColorName }: Background) =>
    backgroundColorName &&
    css`
      background-color: ${colors[backgroundColorName]};

      ${transition({ duration: 300, properties: ['background-color'] })}
    `}
`
