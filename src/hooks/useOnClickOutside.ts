import { RefObject, useEffect } from 'react'

export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: (event?: MouseEvent) => void,
  ignoreRefs: Array<RefObject<HTMLElement | null>> = []
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        ignoreRefs.some((ref) => ref?.current?.contains(event.target as Node))
      ) {
        return
      }

      callback(event)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback, ignoreRefs])
}
