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

export const Home = ({ nonProfits }: HomeProps) => {
  const listRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<Interval | null>(null)
  const desktop = !useIsMobile()

  useEffect(() => {
    const { current } = listRef

    // The autoscroll only applies on desktop
    if (current && desktop) {
      const id = setInterval(() => {
        if (current.scrollTop + current.offsetHeight < current.scrollHeight) {
          console.log('running')

          current.scrollTo({
            top: current.scrollTop + 10
          })
        } else {
          console.log('cleared')

          clearInterval(intervalRef.current as Interval)
        }
      }, 500)

      intervalRef.current = id
    }

    return () => {
      clearInterval(intervalRef.current as Interval)
    }
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
