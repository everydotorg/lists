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
import { Goal } from 'src/components/Goal'
import { useProgressData } from 'src/hooks/useProgressData'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { baseUrlWithPaths } from 'src/services/url'
import { AlternativeDonation } from 'src/components/AlternativeDonation'

export const Campaign = (): JSX.Element => {
  const { slug, name, about, nonprofits, sponsor, showGoalOnListPage } =
    useCampaignInfoContext()
  const router = useRouter()
  const aboutModal = useAboutModal()
  const progress = useProgressData()

  const goToDonation = () => {
    const { showBackToList } = router.query
    router.push(
      {
        pathname: '/[campaign]/donate',
        query: {
          campaign: slug,
          showBackToList
        }
      },
      `/${slug}/donate`
    )
  }

  return (
    <Box as="main" sx={styles.page}>
      <Flex sx={styles.container}>
        <Header onClickDonate={goToDonation} />

        <Flex sx={styles.campaignInfo}>
          <Text sx={styles.campaignTitle} as="h1" variant="h1">
            {name}
          </Text>
          <Text as="h2" sx={styles.aboutText} variant="small">
            {about}
          </Text>
        </Flex>

        {progress && showGoalOnListPage && (
          <Goal progress={progress} sx={styles.progressGoal} />
        )}

        <MobileDonateButton onClick={goToDonation} />

        {sponsor && <Matching sponsor={sponsor} campaign={slug} />}

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
            id="open-about-mobile"
            variant="primaryInverted"
            onClick={() => aboutModal.setOpen(true)}
          >
            <span>About giveli.st</span>
          </Button>
          <CopyToClipboard
            id="campaign-copylink"
            text={baseUrlWithPaths(slug)}
            sx={styles.linkButton}
            linkCopiedStyle={styles.linkCopied}
            variant="primarySmallInverted"
          >
            giveli.st/{slug}
          </CopyToClipboard>
        </Box>
        <Flex sx={styles.footer}>
          <AlternativeDonation />
          <Brand withBorderTop />
        </Flex>
      </Flex>
    </Box>
  )
}
