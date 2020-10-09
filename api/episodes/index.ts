import { fetch } from '~/utils/fetch'

export type Episode = {
  air_date: string
  characters: string[]
  created: string
  episode: string
  id: number
  name: string
  url: string
}

export const getEpisodes = (episodes: string) => fetch<Episode[]>(`episode/${episodes}`)
