import React from 'react'

export const useScrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
  const scrollToElement = () => {
    if (ref && ref.current) {
      const visualViewport = window?.visualViewport

      if (visualViewport) {
        const { height, pageTop } = visualViewport
        const { offsetTop } = ref.current

        const elemPosition = offsetTop + 10

        if (elemPosition > height + pageTop) {
          window.scrollBy({
            behavior: 'smooth',
            top: offsetTop - (height + pageTop) + 56
          })
        }
      }
    }
  }

  return scrollToElement
}
