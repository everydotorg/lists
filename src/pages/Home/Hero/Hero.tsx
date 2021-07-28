import { styles } from './heroStyles'
import { Brand } from 'src/components/Brand'
import { Button, Flex, Text } from 'theme-ui'
import { SurveyButton } from './SurveyButton'
import { useAboutModal } from 'src/hooks/useAboutModal'

export const Hero = () => {
  const aboutModal = useAboutModal()

  return (
    <>
      <Flex sx={styles.brandContainer}>
        <Brand sx={{ flex: 1 }} />
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
        <Button
          variant="primaryInverted"
          sx={{ borderColor: 'primary', px: 4 }}
          onClick={() => aboutModal.setOpen(true)}
        >
          <span>Read more about giveli.st</span>
        </Button>
      </Flex>
    </>
  )
}
