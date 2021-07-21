import { Box, Flex, Image, Text } from 'theme-ui'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { facebookShare, twitterShare } from 'src/services/url'
import { Goal } from 'src/components/Goal'
import { styles } from './thankYouStyles'
import { Facebook } from 'src/components/Facebook'
import { Twitter } from 'src/components/Twitter'
import { Divider } from 'src/components/Divider'
import { RegisterInterest } from './RegisterInterest'
import { Progress } from 'types/Progress'
import { useEffect, useState } from 'react'
import { getProgressData } from 'src/services/campaignData'
import { CopyToClipboard } from 'src/components/CopyToClipboard'

export const ThankYou = (): JSX.Element | null => {
  const {
    slug,
    everySlug,
    socialShareIncentive,
    socialShareText,
    thankYouImageUrl,
    fundingGoal
  } = useCampaignInfoContext()

  const [progress, setProgress] = useState<Progress | null>(null)
  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug}`

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProgressData(everySlug)
      setProgress({
        goal: fundingGoal,
        ...data
      })
    }

    // slug and fundingGoal will be undefined till the .json request is fullfilled
    if (everySlug && fundingGoal) {
      fetchData()
    }
  }, [everySlug, fundingGoal])

  return (
    <Box sx={styles.page}>
      <Flex sx={{ ...styles.header, bg: 'primary' }}>
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
          {socialShareIncentive}
        </Text>
        <Box>
          <CopyToClipboard
            id="thankyou-copylink"
            text={shareUrl}
            as="a"
            variant="primaryInverted"
            type="button"
            sx={styles.shareButton}
          >
            giveli.st/{slug}
          </CopyToClipboard>
          <Flex sx={styles.socialShareContainer}>
            <Facebook
              id="facebook-share"
              width={25}
              height={25}
              target="__blank"
              href={facebookShare(shareUrl, socialShareText)}
            />
            <Twitter
              id="twitter-share"
              width={25}
              height={25}
              target="__blank"
              href={twitterShare(shareUrl, socialShareText)}
            />
          </Flex>
        </Box>
      </Box>
      <RegisterInterest />
    </Box>
  )
}
