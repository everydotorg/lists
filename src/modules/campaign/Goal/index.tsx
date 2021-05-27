import { Box, Progress, Flex, Text } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { styles } from './styles'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
})

export const Goal = (): JSX.Element => {
  const { goal, donated, givers } = useCampaignInfoContext()

  return (
    <Box sx={styles.goalContainer}>
      <Progress sx={styles.progressBar} max={goal} value={donated} />
      <Flex sx={styles.goalDetails}>
        <Flex sx={styles.legend}>
          <Text sx={styles.donated} variant="title">
            {formatter.format(donated)}
          </Text>
          <Text variant="small">donated of {formatter.format(goal)} goal</Text>
        </Flex>
        <Flex sx={styles.legend}>
          <Text variant="title">{givers}</Text>
          <Text variant="small">Givers</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
