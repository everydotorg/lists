import { Button, Flex, Text, Box } from '@theme-ui/components'
import { Divider } from '../shared/Divider'
import { Header } from './Header'
import { styles } from './campaignStyles'
import { NonProfitList } from './NonProfitList'
import { Cause } from './Cause'
import { Matching } from './Matching'
import { useRouter } from 'next/router'
import { useCampaignInfoContext } from 'hooks/useCampaignInfoContext'

export const Campaign = (): JSX.Element => {
  const { slug, name, about, nonprofits, sponsor } = useCampaignInfoContext()
  const router = useRouter()

  const goToDonation = () => router.push(`/${slug}/donate`)

  return (
    <Box as="main" sx={styles.page}>
      <Flex sx={styles.container}>
        <Header onClickDonate={goToDonation} />
        <Flex sx={styles.campaignInfo}>
          <Text sx={styles.campaignTitle} variant="title">
            {name}
          </Text>
          <Text sx={styles.aboutText} variant="small">
            {about}
          </Text>
          {sponsor && (
            <>
              <Divider space={3} />
              <Matching sponsor={sponsor} />
            </>
          )}
        </Flex>
        <Cause />
        {nonprofits && (
          <Box sx={styles.nonprofitsContainer}>
            <NonProfitList list={nonprofits} />
          </Box>
        )}
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
