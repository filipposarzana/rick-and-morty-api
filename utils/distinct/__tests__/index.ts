import { distinct } from '..'

describe('distinct', () => {
  it('return an array of unique values', () => {
    expect(distinct([1, 2, 3, 3])).toStrictEqual([1, 2, 3])
  })
})
