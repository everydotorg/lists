import { useMemo } from 'react'
import { Box, Button, Flex, Image, Text } from 'theme-ui'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { facebookShare, twitterShare } from '../../utils/share'
import { Goal } from '../campaign/Goal'
import { styles } from './styles'
import { Facebook } from '../shared/Facebook'
import { Twitter } from '../shared/Twitter'
import { useParams } from 'react-router-dom'

export const ThankYou = (): JSX.Element | null => {
  const { campaignSlug } = useParams<{ campaignSlug: string }>()

  const { about, primaryColor, shareText, thankYouImageUrl } =
    useCampaignInfoContext()

  const shareUrl = useMemo(
    () => [window.location.origin, campaignSlug].join('/'),
    [campaignSlug]
  )

  const copyToClipboard = () => navigator.clipboard.writeText(shareUrl)

  return (
    <>
      <Flex sx={{ ...styles.header, bg: primaryColor }}>
        <Image src={thankYouImageUrl} sx={styles.headerImg} />
        <Flex sx={styles.thankYouContainer}>
          <Text as="h1" sx={styles.thankYouText}>
            Thank you for your support!
          </Text>
          <Text variant="regular" sx={styles.thankYouTax}>
            A tax-deductable receipt was sent to your email.
          </Text>
        </Flex>
      </Flex>
      <Box sx={styles.goalContainer}>
        <Goal />
      </Box>
      <Box sx={styles.shareContainer}>
        <Text as="p" variant="regular">
          {shareText}
        </Text>
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
    </>
  )
}
