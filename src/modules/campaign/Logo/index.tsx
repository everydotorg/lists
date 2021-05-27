import { Box, Image } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { styles } from './styles'

export const Logo = (): JSX.Element => {
  const { backgroundImageUrl, logoUrl } = useCampaignInfoContext()

  return (
    <Box
      sx={{
        ...styles.container,
        backgroundImage: `url(${backgroundImageUrl})`
      }}
    >
      <Image sx={styles.logo} src={logoUrl} />
    </Box>
  )
}
