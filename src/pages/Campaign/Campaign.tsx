import { Button, Flex, Text, Box } from '@theme-ui/components'
import { Header } from './Header'
import { styles } from './campaignStyles'
import { NonProfitList } from './NonProfitList'
import { Matching } from './Matching'
import { useRouter } from 'next/router'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { Footer } from 'src/components/Footer'

export const Campaign = (): JSX.Element => {
  const { slug, name, about, nonprofits, sponsor } = useCampaignInfoContext()
  const router = useRouter()

  const goToDonation = () => router.push(`/${slug}/donate`)

  return (
    <Box as="main" sx={styles.page}>
      <Flex sx={styles.container}>
        <Header onClickDonate={goToDonation} />
        <Flex sx={styles.campaignInfo}>
          <Text sx={styles.campaignTitle} as="h1" variant="h1">
            {name}
          </Text>
          <Text sx={styles.aboutText} variant="small">
            {about}
          </Text>
          {sponsor && (
            <>
              <Matching sponsor={sponsor} />
            </>
          )}
        </Flex>
        {nonprofits && (
          <Box sx={styles.nonprofitsContainer}>
            <NonProfitList list={nonprofits} />
          </Box>
        )}
        <Footer />
      </Flex>
      <Box sx={styles.buttonContainer}>
        <Button
          id="campaign-mobile-donate"
          sx={styles.submitButton}
          onClick={goToDonation}
          type="button"
        >
          <span>Donate to List</span>
        </Button>
      </Box>
    </Box>
  )
}
