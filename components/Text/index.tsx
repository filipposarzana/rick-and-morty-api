import styled from 'styled-components'
import { fontFamily } from '~/tokens/typography'
import { baseTypographyStyle, TextType, TypographyProps } from './style'

export const Text: TextType = styled.span.withConfig({
  shouldForwardProp: (prop, defaultShouldForwardProp) =>
    !['kind', 'fontStyle'].includes(prop) && defaultShouldForwardProp(prop),
})<TypographyProps>`
  ${baseTypographyStyle}

  font-family: ${fontFamily};

  ${({ ellipsis }) =>
    ellipsis
      ? `
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
      : ''}
`

export const UnstyledText = styled.span``
