import { Flex } from 'theme-ui'
import { Nonprofit } from './Nonprofit'
import { Hero } from './Hero'
import { CampaignInfo } from 'types/CampaignInfo'
import { styles } from './homeStyles'
import { useEffect, useRef } from 'react'
import { useIsMobile } from 'src/hooks/useIsMobile'

export type HomeNonProfit = Pick<
  CampaignInfo,
  'slug' | 'name' | 'about' | 'imageUrl' | 'cause'
>

export type HomeProps = {
  nonProfits: Array<HomeNonProfit>
}

type Interval = NodeJS.Timeout
type Timeout = NodeJS.Timeout

export const Home = ({ nonProfits }: HomeProps) => {
  const listRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<Interval | null>(null)
  const timeoutRef = useRef<Timeout | null>(null)

  const desktop = !useIsMobile()

  useEffect(() => {
    const { current } = listRef

    // The autoscroll only applies on desktop
    if (current && desktop) {
      const handler = () => {
        console.log('event')

        clearTimeout(timeoutRef.current as Interval)

        const timeoutId = setTimeout(() => {
          clearInterval(intervalRef.current as Interval)

          const intervalId = setInterval(() => {
            if (
              current.scrollTop + current.offsetHeight <
              current.scrollHeight
            ) {
              console.log('running')

              current.scrollTo({
                top: current.scrollTop + 10
              })
            } else {
              console.log('cleared')

              clearInterval(intervalRef.current as Interval)
            }
          }, 500)

          intervalRef.current = intervalId
        }, 3000)

        timeoutRef.current = timeoutId
      }

      handler() // so it starts scrolling on first render

      current.addEventListener('scroll', handler)

      return () => {
        clearInterval(intervalRef.current as Interval)
        clearTimeout(timeoutRef.current as Timeout)
        current.removeEventListener('scroll', handler)
      }
    }

    return () => null
  }, [desktop])

  const onUserInteraction = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <Flex sx={styles.container}>
      <Flex
        id="list"
        sx={styles.givelistSection}
        ref={listRef}
        onWheel={onUserInteraction}
      >
        {nonProfits.map((nonprofit) => (
          <Nonprofit nonprofit={nonprofit} key={nonprofit.slug} />
        ))}
      </Flex>
      <Flex sx={styles.heroSection}>
        <Hero />
      </Flex>
    </Flex>
  )
}
