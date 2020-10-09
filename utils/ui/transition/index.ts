type Param = {
  delay?: number
  duration: number
  properties: string[]
}

const easing = 'cubic-bezier(0.23, 1, 0.32, 1)'

export const transition = ({ delay = 0, duration, properties }: Param) => `
  transition: ${properties.map((prop) => `${prop} ${duration}ms ${easing} ${delay}ms`).join(',')};
  will-change: ${properties.join(',')};
`
