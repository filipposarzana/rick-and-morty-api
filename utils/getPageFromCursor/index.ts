/**
 *
 * @param cursor string | null
 * eg: https://rickandmortyapi.com/api/character/?page=1
 *
 * @return number | null
 * - null
 * - number of page
 */

export const getPageFromCursor = (cursor: null | string): number => {
  if (!cursor) {
    return null
  }

  const matches = cursor.match(/\?page=(\d+)$/)

  if (!matches) {
    return null
  }

  const page = matches[1]

  // return ?page={number} or null as the initial page
  return page ? Number(page) : null
}
