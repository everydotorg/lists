import { styles } from './heroStyles'
import { Brand } from 'src/components/Brand'
import { Link, Flex, Text } from 'theme-ui'
import { SurveyButton } from './SurveyButton'

export const Hero = () => {
  return (
    <>
      <Flex sx={styles.brandContainer}>
        <Brand />
      </Flex>
      <Flex sx={styles.textContainer}>
        <Text as="h1" variant="h1">
          Discover, donate, and share lists of recommended nonprofits.
        </Text>
        <Text variant="small">
          Created by a nonprofit. Forever free. A trusted place you can champion
          amazing nonprofits via social media.
        </Text>
      </Flex>
      <Flex sx={styles.buttonsContainer}>
        <SurveyButton />
        <Link
          href="https://giveli.st"
          variant="inverted"
          sx={{ width: '100%', textAlign: 'center' }}
        >
          Read more about giveli.st
        </Link>
      </Flex>
    </>
  )
}
