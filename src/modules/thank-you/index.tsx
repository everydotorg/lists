import { Box, Button, Flex, Image, Text } from 'theme-ui'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { facebookShare, twitterShare } from '../../utils/url'
import { Goal } from '../campaign/Goal'
import { styles } from './styles'
import { Facebook } from '../shared/Facebook'
import { Twitter } from '../shared/Twitter'
import { useParams } from 'react-router-dom'
import { Divider } from '../shared/Divider'
import { RegisterInterest } from './RegisterInterest'
import { Progress } from '../../types/Progress'
import { useEffect, useState } from 'react'
import { getProgressData } from '../../utils/campaignData'

export const ThankYou = (): JSX.Element | null => {
  const { campaignSlug } = useParams<{ campaignSlug: string }>()
  const {
    slug,
    about,
    primaryColor,
    shareText,
    thankYouImageUrl,
    foundingGoal
  } = useCampaignInfoContext()

  const [progress, setProgress] = useState<Progress | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProgressData(slug)
      setProgress({
        goal: foundingGoal,
        ...data
      })
    }

    // slug and foundingGoal will be undefined till the .json request is fullfilled
    if (slug && foundingGoal) {
      fetchData()
    }
  }, [slug, foundingGoal])

  const shareUrl = [window.location.origin, campaignSlug].join('/')

  const copyToClipboard = () => navigator.clipboard.writeText(shareUrl)

  return (
    <Box sx={styles.page}>
      <Flex sx={{ ...styles.header, bg: primaryColor }}>
        <Image src={thankYouImageUrl} sx={styles.headerImg} />
        <Divider space={0} inverted />
        <Flex sx={styles.thankYouContainer}>
          <Text as="h1" sx={styles.thankYouText}>
            Thank you for your support!
          </Text>
          <Text variant="regular" sx={styles.thankYouTax}>
            A tax-deductable receipt was sent to your email.
          </Text>
        </Flex>
      </Flex>
      {progress && (
        <Box sx={styles.goalContainer}>
          <Goal progress={progress} />
        </Box>
      )}
      <Box sx={styles.shareContainer}>
        <Text as="p" variant="regular">
          {shareText}
        </Text>
        <Box>
          <Button
            as="a"
            variant="primary"
            type="button"
            sx={styles.shareButton}
            onClick={copyToClipboard}
          >
            Copy link to this list
          </Button>
          <Flex sx={styles.socialShareContainer}>
            <Facebook
              width={25}
              height={25}
              target="__blank"
              href={facebookShare(shareUrl, about)}
            />
            <Twitter
              width={25}
              height={25}
              target="__blank"
              href={twitterShare(shareUrl, about)}
            />
          </Flex>
        </Box>
      </Box>
      <RegisterInterest />
    </Box>
  )
}
