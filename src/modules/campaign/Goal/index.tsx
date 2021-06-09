import { Box, Progress, Flex, Text } from 'theme-ui'
import { Progress as ProgressType } from '../../../types/Progress'
import { styles } from './styles'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

interface GoalProps {
  progress: ProgressType
}

export const Goal = ({ progress }: GoalProps): JSX.Element => {
  return (
    <Box sx={styles.goalContainer}>
      <Progress
        sx={styles.progressBar}
        max={progress.goal}
        value={progress.donated}
      />
      <Flex sx={styles.goalDetails}>
        <Flex sx={styles.legend}>
          <Text sx={styles.donated} variant="title">
            {formatter.format(progress.donated)}
          </Text>
          <Text variant="small">
            donated of {formatter.format(progress.goal)} goal
          </Text>
        </Flex>
        <Flex sx={styles.legend}>
          <Text variant="title">{progress.givers}</Text>
          <Text variant="small">Givers</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
