import { isNeitherNullNorUndefined } from '..'

describe('isNeitherNullNorUndefined', () => {
  it('returns true if not null or undefined', () => {
    expect(isNeitherNullNorUndefined([])).toBe(true)
    expect(isNeitherNullNorUndefined({})).toBe(true)
    expect(isNeitherNullNorUndefined('')).toBe(true)
    expect(isNeitherNullNorUndefined(() => ({}))).toBe(true)
    expect(isNeitherNullNorUndefined(1)).toBe(true)
    expect(isNeitherNullNorUndefined(true)).toBe(true)
  })

  it('returns false if null or undefined', () => {
    expect(isNeitherNullNorUndefined(null)).toBe(false)
    expect(isNeitherNullNorUndefined(undefined)).toBe(false)
  })
})
