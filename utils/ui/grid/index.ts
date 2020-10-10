import { css } from 'styled-components'

export type Grid = {
  align: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
  basis: 'auto' | '33%' | '50%' | '0' | '4px' | '16px' | '24px' | '36px' | '256px'
  flexDir: 'column' | 'row' | 'row-reverse'
  flexWrap: 'nowrap' | 'wrap'
  grow: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  justify: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between'
  shrink: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

export const grid = css<Grid>`
  display: flex;
  min-height: 0;
  min-width: 0;

  ${({ align, basis, flexDir, flexWrap, grow, justify, shrink }) => `
    align-items: ${align};
    flex-basis: ${basis};
    flex-direction: ${flexDir};
    flex-grow: ${grow};
    flex-shrink: ${shrink};
    flex-wrap: ${flexWrap};
    justify-content: ${justify};
  `}
`
