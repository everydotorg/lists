import { Box, Text } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { styles } from './causeStyles'

export const Cause = (): JSX.Element | null => {
  const { nonprofits, cause } = useCampaignInfoContext()

  if (!nonprofits) {
    return null
  }

  return (
    <Box sx={styles.container}>
      <Text as="p" variant="small" sx={styles.text}>
        Supporting <span>{nonprofits.length} nonprofits</span> from #
        <span>{cause}</span> causes
      </Text>
    </Box>
  )
}
