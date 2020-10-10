import { call } from '~/utils/fetch'

export type Episode = {
  air_date: string
  characters: string[]
  created: string
  episode: string
  id: number
  name: string
  url: string
}

export const getEpisodes = async (episodes: number[]) => {
  const response = await call<Episode | Episode[]>(`episode/${episodes.join(',')}`)

  return 'id' in response ? [response] : response
}
