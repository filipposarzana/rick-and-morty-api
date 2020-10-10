export const distinct = <T extends unknown>(value: T[]) => [...new Set(value)]
