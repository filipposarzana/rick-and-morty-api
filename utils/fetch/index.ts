import { apiUrl } from '~/constants/url'

const init = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const call = async <T extends unknown>(path: string): Promise<T> => {
  const response = await fetch(`${apiUrl}/${path}`, init)

  return response.json()
}
