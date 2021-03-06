import { Box } from '@theme-ui/components'
import Image from 'next/image'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { AboutButton } from './AboutButton'
import { BackListButton } from './BackListButton'
import { styles } from './bannerStyles'
import { DiscoverButton } from './DiscoverButton'

interface BannerProps {
  showAbout: boolean
  showDiscover: boolean
  showBackList: boolean
}
export const Banner = ({
  showAbout,
  showDiscover,
  showBackList
}: BannerProps) => {
  const { bannerUrl } = useCampaignInfoContext()

  return (
    <Box sx={styles.banner}>
      {bannerUrl && (
        <Image
          src={bannerUrl}
          sizes="57vw"
          quality={45}
          // disable lazy loading from next/image and user browser's built-in
          loading="eager"
          alt="Campaign banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0LQUAAPUAtNYN+AkAAAAASUVORK5CYII="
        />
      )}
      {showBackList && <BackListButton />}
      {showAbout && <AboutButton />}
      {showDiscover && <DiscoverButton />}
    </Box>
  )
}
