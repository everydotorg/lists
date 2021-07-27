import { Box, Button } from 'theme-ui'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { styles } from './headerStyles'
import { baseUrlWithPaths } from 'src/services/url'

interface HeaderProps {
  onClickDonate: () => void
}

export const Header = ({ onClickDonate }: HeaderProps): JSX.Element => {
  const { mobileBannerUrl, slug } = useCampaignInfoContext()
  const shareUrl = baseUrlWithPaths(slug)

  return (
    <>
      <Box
        sx={{
          ...styles.container,
          backgroundImage: `url(${mobileBannerUrl})`
        }}
      ></Box>

      <Box sx={styles.desktopContainer}>
        <CopyToClipboard
          id="campaign-copylink"
          text={shareUrl}
          sx={styles.linkButton}
          linkCopiedStyle={styles.linkCopied}
          variant="primarySmallInverted"
        >
          giveli.st/{slug}
        </CopyToClipboard>
      </Box>
      <Button
        id="campaign-desktop-donate"
        sx={styles.donateButton}
        onClick={onClickDonate}
        variant="primarySmall"
      >
        <span>Donate</span>
      </Button>
    </>
  )
}
