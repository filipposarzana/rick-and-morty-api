import { Episode, getEpisodes } from '~/api/episodes'
import { getLocations, Location } from '~/api/locations'
import { Response } from '~/types'
import { distinct } from '~/utils/distinct'
import { call } from '~/utils/fetch'
import { getIdFromEndpoint } from '~/utils/getIdFromEndpoint'
import { isNeitherNullNorUndefined } from '~/utils/isNeitherNullNorUndefined'

export type Character = {
  created: string
  episode: string[]
  id: number
  gender: 'Female' | 'Genderless' | 'Male' | 'unknown'
  image: string
  location: {
    name: string
    url: string
  }
  name: string
  origin: {
    name: string
    url: string
  }
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  url: string
}

export type CharacterAggregate = Omit<Character, 'episode' | 'location' | 'origin'> & {
  episodes: Episode[]
  location: Location
  origin: Location
}

export const getCharacters = async (page = 1): Promise<Response<CharacterAggregate[]>> => {
  const { info, results } = await call<Response<Character[]>>(`character?page=${page}`)

  const characters = results.map(({ episode, location, origin, ...character }) => ({
    ...character,
    episodes: episode.map(getIdFromEndpoint).filter(isNeitherNullNorUndefined),
    location: getIdFromEndpoint(location.url),
    origin: getIdFromEndpoint(origin.url),
  }))

  const episodeIds = distinct(characters.flatMap(({ episodes }) => episodes))

  const locationIds = distinct([
    ...characters.map(({ location }) => location),
    ...characters.map(({ origin }) => origin),
  ]).filter(isNeitherNullNorUndefined)

  const episodesResponse = await getEpisodes(episodeIds)
  const locations = await getLocations(locationIds)

  return {
    info,
    results: characters.map(({ episodes, location, origin, ...character }) => ({
      ...character,
      episodes: episodes.map((episode) => episodesResponse.find(({ id }) => id === episode) || null),
      location: locations.find(({ id }) => id === location) || null,
      origin: locations.find(({ id }) => id === origin) || null,
    })),
  }
}
