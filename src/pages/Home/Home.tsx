import { Flex } from 'theme-ui'
import { Nonprofit } from './Nonprofit'
import { Hero } from './Hero'
import { CampaignInfo } from 'types/CampaignInfo'
import { styles } from './homeStyles'
import { useCallback, useEffect, useRef } from 'react'
import { useIsMobile } from 'src/hooks/useIsMobile'

export type HomeNonProfit = Pick<
  CampaignInfo,
  'slug' | 'name' | 'about' | 'imageUrl' | 'cause'
>

export type HomeProps = {
  nonProfits: Array<HomeNonProfit>
}

export const Home = ({ nonProfits }: HomeProps) => {
  const listRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const desktop = !useIsMobile()

  const clearTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const autoscroll = useCallback(() => {
    const ref = listRef.current as HTMLDivElement

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (ref.scrollTop + ref.offsetHeight < ref.scrollHeight) {
          ref.scrollTo({
            top: ref.scrollTop + 1,
            behavior: 'smooth'
          })
        } else {
          clearTimers()
          ref.scrollTo({ top: 0, behavior: 'smooth' })
          autoscroll()
        }
      }, 50)
    }, 3000)
  }, [])

  useEffect(() => {
    if (listRef.current && desktop) {
      autoscroll()

      return () => {
        clearTimers()
      }
    }

    return () => null
  }, [autoscroll, desktop])

  const onUserInteraction = () => {
    if (desktop) {
      console.log('onUserInteraction')
      clearTimers()
      autoscroll()
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
