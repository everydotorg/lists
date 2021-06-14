import { Box, Button } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { styles } from './styles'
export const Banner = (): JSX.Element => {
  const { bannerUrl, slug } = useCampaignInfoContext()

  return (
    <Box
      sx={{
        ...styles.banner,
        backgroundImage: `url(${bannerUrl})`
      }}
    >
      <Button sx={styles.urlText} variant="primarySmall">
        giveli.st/<strong>{slug}</strong>
      </Button>
    </Box>
  )
}
