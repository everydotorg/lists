import { Progress, Flex, Text, ThemeUIStyleObject } from 'theme-ui'
import { Progress as ProgressType } from 'types/Progress'
import { styles } from './goalStyles'
import { currencyFormatter } from 'src/services/utils'

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
  sx?: ThemeUIStyleObject
}

export const Goal = ({ progress, sx = {} }: GoalProps) => {
  return (
    <Flex sx={{ ...styles.goalContainer, ...sx }}>
      <Progress
        sx={styles.progressBar}
        max={progress.goal}
        value={progress.donated}
      />
      <Flex>
        <Info
          value={currencyFormatter.format(progress.donated)}
          label="donated"
        />
        <Info value={currencyFormatter.format(progress.goal)} label="goal" />
      </Flex>
    </Flex>
  )
}
