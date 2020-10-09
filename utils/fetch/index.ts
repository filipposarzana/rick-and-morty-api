import f from 'node-fetch'
import { apiUrl } from '~/constants/url'
import { Response } from '~/types'

const init = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const fetch = async <T extends unknown>(path: string): Promise<Response<T>> => {
  const response = await f(`${apiUrl}/${path}`, init)

  return response.json()
}
