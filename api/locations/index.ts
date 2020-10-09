import { fetch } from '~/utils/fetch'

export type Location = {
  created: string
  dimension: string
  id: number
  name: string
  residents: string[]
  type: string
  url: string
}

export const getLocation = (location: number) => {
  console.log(location, `location/${location}`)
  return fetch<Location>(`location/${location}`)
}
