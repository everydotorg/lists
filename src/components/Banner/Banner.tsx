import { Box } from '@theme-ui/components'
import { AboutButton } from './AboutButton'
import { DiscoverButton } from './DiscoverButton'
import { styles } from './bannerStyles'
import { BackListButton } from './BackListButton'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import Image from 'next/image'

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
      <Image
        src={bannerUrl}
        sizes="57vw"
        quality={60}
        alt="Campaign banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0LQUAAPUAtNYN+AkAAAAASUVORK5CYII="
      />
      {showBackList && <BackListButton />}
      {showAbout && <AboutButton />}
      {showDiscover && <DiscoverButton />}
    </Box>
  )
}
