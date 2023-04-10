export const clx = (
  ...strings: Array<
    string | Record<string, boolean | undefined> | undefined | null
  >
): string =>
  strings
    .reduce((result: string[], current) => {
      if (typeof current === 'string') {
        result.push(current)
      }

      if (current && typeof current === 'object') {
        Object.entries(current).forEach((entry) => {
          if (entry[1]) {
            result.push(entry[0])
          }
        })
      }

      return result
    }, [])
    .join(' ')
