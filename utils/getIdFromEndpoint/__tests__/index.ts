import { getIdFromEndpoint } from '..'

describe('getIdFromEndpoint', () => {
  it('returns null if no match', () => {
    expect(getIdFromEndpoint('')).toBe(null)
    expect(getIdFromEndpoint('https://rickandmortyapi.com/api/episode')).toBe(null)
  })

  it('returns the id', () => {
    expect(getIdFromEndpoint('https://rickandmortyapi.com/api/episode/4')).toBe(4)
  })
})
