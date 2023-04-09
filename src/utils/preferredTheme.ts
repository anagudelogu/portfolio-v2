import { type Themes } from '../types'

export const preferredTheme = (): Themes => {
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches)
    return 'night'
  return 'winter'
}
