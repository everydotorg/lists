import { Box, Button } from 'theme-ui'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { styles } from './headerStyles'
import { baseUrlWithPaths } from 'src/services/url'
import Image from 'next/image'

interface HeaderProps {
  onClickDonate: () => void
}

export const Header = ({ onClickDonate }: HeaderProps): JSX.Element => {
  const { mobileBannerUrl, slug } = useCampaignInfoContext()
  const shareUrl = baseUrlWithPaths(slug)

  return (
    <>
      <Box sx={styles.container}>
        <Image
          src={mobileBannerUrl}
          quality={60}
          sizes="100vw"
          alt="Campaign mobile banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0LQUAAPUAtNYN+AkAAAAASUVORK5CYII="
        />
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
