import { styles } from './surveyButtonStyles'
import { Flex, Text, Link } from 'theme-ui'

export const SurveyButton = () => {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSe0Rzl5TXdyZ64qkxVSFRbkTATJd2Gw6oeNnBnLgB50u0tw2A/viewform"
      target="_blank"
    >
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
