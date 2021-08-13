import { Box } from '@theme-ui/components'
import { AboutButton } from './AboutButton'
import { DiscoverButton } from './DiscoverButton'
import { styles } from './bannerStyles'
import { BackExamplesButton } from './BackExamplesButton'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import Image from 'next/image'

interface BannerProps {
  showAbout: boolean
  showDiscover: boolean
  showBackExamples: boolean
}
export const Banner = ({
  showAbout,
  showDiscover,
  showBackExamples
}: BannerProps) => {
  const { bannerUrl } = useCampaignInfoContext()

  return (
    <Box sx={styles.banner}>
      <Image
        src={bannerUrl}
        alt="Campaign banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0LQUAAPUAtNYN+AkAAAAASUVORK5CYII="
      />
      {showBackExamples && <BackExamplesButton />}
      {showAbout && <AboutButton />}
      {showDiscover && <DiscoverButton />}
    </Box>
  )
}
