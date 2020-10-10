/**
 * @param endpoint string
 * eg: https://rickandmortyapi.com/api/episode/1
 *
 * @return number | null
 * - null
 * - id
 */
export const getIdFromEndpoint = (endpoint: string): number => {
  const matches = endpoint.match(/\/(\d+)$/)

  if (!matches) {
    return null
  }

  const id = matches[1]

  // return /{number} or null
  return id ? Number(id) : null
}
