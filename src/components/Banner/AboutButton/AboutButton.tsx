import { useAboutModal } from 'src/hooks/useAboutModal'
import { Flex, Button } from 'theme-ui'
import { styles } from './aboutButtonStyles'

export const AboutButton = () => {
  const aboutModal = useAboutModal()

  return (
    <Flex sx={styles.aboutContainer}>
      <Button
        id="open-about"
        variant="primarySmallInverted"
        sx={styles.aboutButton}
        onClick={() => aboutModal.setOpen(true)}
      >
        <span>About Every.org lists</span>
      </Button>
    </Flex>
  )
}
