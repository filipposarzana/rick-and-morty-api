import { getPageFromCursor } from '..'

describe('getPageFromCursor', () => {
  it('returns null if no cursor or no match', () => {
    expect(getPageFromCursor(null)).toBe(null)
    expect(getPageFromCursor('')).toBe(null)
    expect(getPageFromCursor('https://rickandmortyapi.com/api/character')).toBe(null)
  })

  it('returns the number of page', () => {
    expect(getPageFromCursor('https://rickandmortyapi.com/api/character?page=4')).toBe(4)
  })
})
