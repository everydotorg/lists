import { Box, Image, Flex, Text, Button } from 'theme-ui'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { styles } from './headerStyles'
import { BannerButtons } from 'src/components/BannerButtons'

interface HeaderProps {
  onClickDonate: () => void
}
export const Header = ({ onClickDonate }: HeaderProps): JSX.Element => {
  const { backgroundImageUrl, slug } = useCampaignInfoContext()
  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug}`

  return (
    <>
      <Box
        sx={{
          ...styles.container,
          backgroundImage: `url(${backgroundImageUrl})`
        }}
      >
        <BannerButtons />
      </Box>

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
        <Button
          id="campaign-desktop-donate"
          sx={styles.donateButton}
          onClick={onClickDonate}
          variant="primarySmall"
        >
          <span>Donate</span>
        </Button>
      </Box>
    </>
  )
}
