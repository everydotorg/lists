import { styles } from './surveyButtonStyles'
import { Flex, Text, Link } from 'theme-ui'

export const SurveyButton = () => {
  return (
    <Link href="https://giveli.st">
      <Flex sx={styles.container}>
        <Text variant="regular" sx={styles.text}>
          Apply to create your own
        </Text>
        <Text variant="regular" sx={styles.caption}>
          3 min survey
        </Text>
      </Flex>
    </Link>
  )
}
