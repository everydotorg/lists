import { Box } from '@theme-ui/components'
import { useLocation } from 'react-router-dom'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { BannerButtons } from '../../campaign/BannerButtons'
import { styles } from './styles'

export const Banner: React.FC = () => {
  const { bannerUrl } = useCampaignInfoContext()

  const notOnThankYouPage = !useLocation().pathname.includes('thank-you')

  return (
    <Box
      sx={{
        ...styles.banner,
        backgroundImage: `url(${bannerUrl})`
      }}
    >
      {notOnThankYouPage && <BannerButtons />}
    </Box>
  )
}
