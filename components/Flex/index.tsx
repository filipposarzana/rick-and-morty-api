import { ReactNode } from 'react'
import styled from 'styled-components'
import { transition } from '~/utils/ui'
import { background, BackgroundProps } from './utils/background'
import { border, BorderProps } from './utils/border'
import { flexbox, Flexbox, FlexboxProps } from './utils/flexbox'
import { padding, PaddingProps } from './utils/padding'

type StyleProps = BackgroundProps & BorderProps & FlexboxProps & PaddingProps

const defaultProps: Flexbox = {
  align: 'stretch',
  basis: 'auto',
  direction: 'column',
  grow: 0,
  justify: 'flex-start',
  shrink: 0,
  wrap: 'nowrap',
}

type FlexComponentProps = StyleProps & {
  children?: ReactNode
}

export const Flex = styled.div
  .withConfig({
    shouldForwardProp: (prop, defaultShouldForwardProp) =>
      !['direction', 'wrap'].includes(prop) && defaultShouldForwardProp(prop),
  })
  .attrs((props: FlexComponentProps) => ({
    ...defaultProps,
    ...props,
  }))`
  ${background}
  ${border}
  ${flexbox}
  ${padding}

  ${transition({ duration: 300, properties: ['background-color', 'border'] })}
`
