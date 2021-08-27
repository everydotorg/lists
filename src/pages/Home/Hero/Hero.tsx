import { styles } from './heroStyles'
import { Brand } from 'src/components/Brand'
import { Button, Flex, Text } from 'theme-ui'
import { SurveyButton } from './SurveyButton'
import { useAboutModal } from 'src/hooks/useAboutModal'
import { Tagline } from 'pages'

export const Hero = () => {
  const aboutModal = useAboutModal()

  return (
    <>
      <Flex sx={styles.brandContainer}>
        <Brand sx={{ flex: 1 }} />
      </Flex>
      <Flex sx={styles.textContainer}>
        <Text as="h1" variant="h1">
          {Tagline}
        </Text>
        <Text variant="small">
          A trusted place where you can champion worthy causes. Created by a
          nonprofit. Forever free.
        </Text>
      </Flex>
      <Flex sx={styles.buttonsContainer}>
        <SurveyButton />
        <Button
          variant="primaryInverted"
          id="open-about-home"
          sx={{ borderColor: 'primary', px: 4 }}
          onClick={() => aboutModal.setOpen(true)}
        >
          <span>Read more about giveli.st</span>
        </Button>
      </Flex>
    </>
  )
}
