import { Button, Flex, Text, Box } from '@theme-ui/components'
import { Header } from './Header'
import { styles } from './campaignStyles'
import { NonProfitList } from './NonProfitList'
import { Matching } from './Matching'
import { useRouter } from 'next/router'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { Brand } from 'src/components/Brand'
import { Divider } from 'src/components/Divider'
import { useAboutModal } from 'src/hooks/useAboutModal'
import { MobileDonateButton } from './MobileDonateButton'

export const Campaign = (): JSX.Element => {
  const { slug, name, about, nonprofits, sponsor } = useCampaignInfoContext()

  const router = useRouter()
  const aboutModal = useAboutModal()

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
        </Flex>

        <MobileDonateButton onClick={goToDonation} />
        {sponsor && (
          <>
            <Matching sponsor={sponsor} />
          </>
        )}
        {nonprofits && (
          <Box sx={styles.nonprofitsContainer}>
            <NonProfitList list={nonprofits} />
          </Box>
        )}
        <Box sx={styles.aboutButtonContainer}>
          <Divider space={0} color="borderGray" />
          <Button
            sx={styles.aboutButton}
            type="button"
            variant="primaryInverted"
            onClick={() => aboutModal.setOpen(true)}
          >
            <span>About giveli.st</span>
          </Button>
        </Box>
        <Flex sx={styles.footerContainer}>
          <Brand sx={{ flex: 1 }} />
        </Flex>
      </Flex>
    </Box>
  )
}
