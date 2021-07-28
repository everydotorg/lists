import { useEffect, useState } from 'react'
import { theme } from 'src/styles/theme'

export const useIsMobile = () => {
  const mediaQuery =
    process.browser && window.matchMedia(`(max-width: ${theme.breakpoints[0]})`)

  const [mobile, setMobile] = useState(mediaQuery ? mediaQuery.matches : false)

  useEffect(() => {
    if (mediaQuery) {
      const handleChange = () => {
        setMobile(mediaQuery.matches)
      }

      mediaQuery.addEventListener('change', handleChange)

      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }

    return () => null
  }, [mediaQuery])

  return mobile
}
