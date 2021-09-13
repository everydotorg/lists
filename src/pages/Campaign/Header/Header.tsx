import Image from 'next/image'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { baseUrlWithPaths } from 'src/services/url'
import { Box, Button } from 'theme-ui'
import { styles } from './headerStyles'

interface HeaderProps {
  onClickDonate: () => void
}

export const Header = ({ onClickDonate }: HeaderProps): JSX.Element => {
  const { slug, mobileBannerUrl } = useCampaignInfoContext()
  const shareUrl = baseUrlWithPaths(slug)

  return (
    <>
      <Box sx={styles.container}>
        <Image
          src={mobileBannerUrl}
          quality={45}
          sizes="100vw"
          // disable lazy loading from next/image and user browser's built-in
          loading="eager"
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
