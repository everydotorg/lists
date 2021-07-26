import { Flex, ThemeProvider } from 'theme-ui'
import { theme } from 'src/styles/theme'
import { Nonprofit } from './Nonprofit'
import { Hero } from './Hero'
import { CampaignInfo } from 'types/CampaignInfo'
import { styles } from './homeStyles'

export type HomeNonProfit = Pick<
  CampaignInfo,
  'slug' | 'name' | 'about' | 'imageUrl' | 'cause'
>

export type HomeProps = {
  nonProfits: Array<HomeNonProfit>
}

export const Home = ({ nonProfits }: HomeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={styles.container}>
        <Flex id="list" sx={styles.givelistSection}>
          {nonProfits.map((nonprofit) => (
            <Nonprofit nonprofit={nonprofit} key={nonprofit.slug} />
          ))}
        </Flex>
        <Flex sx={styles.heroSection}>
          <Hero />
        </Flex>
      </Flex>
    </ThemeProvider>
  )
}
