import { Box } from '@theme-ui/components'
import { AboutButton } from './AboutButton'
import { DiscoverButton } from './DiscoverButton'
import { styles } from './bannerStyles'
import { BackExamplesButton } from './BackExamplesButton'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'

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
      <img src={bannerUrl} alt="campaign banner" />
      {showBackExamples && <BackExamplesButton />}
      {showAbout && <AboutButton />}
      {showDiscover && <DiscoverButton />}
    </Box>
  )
}
