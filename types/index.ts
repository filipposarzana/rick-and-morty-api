export type PromiseReturnType<T extends (...args: any[]) => any> = ReturnType<T> extends Promise<infer U> ? U : T

export type Response<T extends unknown> = {
  info: {
    count: number
    next: null | string
    pages: number
    prev: null | string
  }
  results: T
}

export type SizeInt =
  | 0
  | 4
  | 8
  | 16
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96
  | 104
  | 112
  | 120
  | 128
  | 136
  | 144
