import { Box, Text } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { styles } from './styles'
export const Banner = (): JSX.Element => {
  const { bannerUrl } = useCampaignInfoContext()

  return (
    <Box
      sx={{
        ...styles.banner,
        backgroundImage: `url(${bannerUrl})`
      }}
    >
      <Text sx={styles.urlText} variant="normal">
        giveli.st/<strong>lilbubsbirthday</strong>
      </Text>
    </Box>
  )
}
