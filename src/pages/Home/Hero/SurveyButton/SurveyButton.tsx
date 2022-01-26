import { styles } from './surveyButtonStyles'
import { Flex, Text, Link } from 'theme-ui'

export const SurveyButton = () => {
  return (
    <Link
      href="https://forms.gle/dWCGgbm7NX4Ln8BP7"
      target="_blank"
      id="register-interest-home"
      rel="noopener"
    >
      <Flex sx={styles.container}>
        <Text variant="regular" sx={styles.text}>
          Create your own
        </Text>
        <Text variant="regular" sx={styles.caption}>
          3 min survey
        </Text>
      </Flex>
    </Link>
  )
}
