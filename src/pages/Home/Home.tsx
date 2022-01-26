import { Flex } from 'theme-ui'
import { Hero } from './Hero'
import { CampaignInfo } from 'types/CampaignInfo'
import { styles } from './homeStyles'
import { NonprofitList } from './NonprofitList'

export type HomeNonProfit = Pick<
  CampaignInfo,
  'slug' | 'name' | 'about' | 'imageUrl' | 'cause' | 'nonprofits' | 'sponsor'
>

export type HomeProps = {
  nonProfits: Array<HomeNonProfit>
}

export const Home = ({ nonProfits }: HomeProps) => {
  return (
    <Flex sx={styles.container}>
      <NonprofitList nonProfits={nonProfits} sx={styles.listSection} />
      <Flex sx={styles.heroSection}>
        <Hero />
      </Flex>
    </Flex>
  )
}
