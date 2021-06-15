import { Box } from '@theme-ui/components'
import { useLocation } from 'react-router-dom'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { styles } from './styles'
import { CopyToClipboard } from '../CopyToClipboard'

export const Banner = (): JSX.Element => {
  const { bannerUrl, slug } = useCampaignInfoContext()

  const notOnThankYouPage = !useLocation().pathname.includes('thank-you')

  const shareUrl = [window.location.origin, slug].join('/')

  return (
    <Box
      sx={{
        ...styles.banner,
        backgroundImage: `url(${bannerUrl})`
      }}
    >
      {notOnThankYouPage && (
        <CopyToClipboard
          text={shareUrl}
          sx={styles.urlButton}
          linkCopiedStyle={styles.linkCopied}
          variant="primarySmallInverted"
        >
          giveli.st/<strong>{slug}</strong>
        </CopyToClipboard>
      )}
    </Box>
  )
}
