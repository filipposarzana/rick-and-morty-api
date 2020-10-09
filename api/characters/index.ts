import { fetch } from '~/utils/fetch'

export type Character = {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Genderless' | 'Male' | 'unknown'
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export const getCharacters = async (page: number = 1) => {
  const { info, results } = await fetch<Character[]>(`character?page=${page}`)

  return {
    info,
    results,
  }
}
