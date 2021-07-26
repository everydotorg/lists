import { Progress, Flex, Text } from 'theme-ui'
import { Progress as ProgressType } from 'types/Progress'
import { styles } from './goalStyles'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

interface InfoProps {
  value: string
  label: string
}
const Info = ({ value, label }: InfoProps) => (
  <Flex sx={styles.legend}>
    <Text sx={styles.legendValue} variant="title">
      {value}
    </Text>
    <Text variant="small">{label}</Text>
  </Flex>
)

interface GoalProps {
  progress: ProgressType
}

export const Goal = ({ progress }: GoalProps) => {
  return (
    <Flex sx={styles.goalContainer}>
      <Progress
        sx={styles.progressBar}
        max={progress.goal}
        value={progress.donated}
      />
      <Flex>
        <Info value={formatter.format(progress.donated)} label="donated" />
        <Info value={formatter.format(progress.goal)} label="goal" />
      </Flex>
    </Flex>
  )
}
