import { call } from '~/utils/fetch'

export type Location = {
  created: string
  dimension: string
  id: number
  name: string
  residents: string[]
  type: string
  url: string
}

export const getLocations = async (locations: number[]) => {
  const response = await call<Location | Location[]>(`location/${locations.join(',')}`)

  return 'id' in response ? [response] : response
}
