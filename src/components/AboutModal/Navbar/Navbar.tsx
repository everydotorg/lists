import { CloseIcon } from 'src/components/CloseIcon'
import { useAboutModal } from 'src/hooks/useAboutModal'
import { gtag } from 'src/services/gtag'
import { Box, Flex, Text, Link } from 'theme-ui'
import { styles } from './navbarStyles'

export type Section = 'about'

type NavbarProps = {
  selected: Section
}

export const Navbar = ({ selected }: NavbarProps) => {
  const aboutModal = useAboutModal()

  const closeModal = () => {
    gtag.pushEvent('close_about', {})
    aboutModal.setOpen(false)
  }

  return (
    <Flex sx={styles.navbarContainer}>
      <Flex sx={styles.menuContainer}>
        <Text
          sx={{
            ...styles.menuItem,
            ...(selected === 'about' ? styles.menuItemSelected : {})
          }}
        >
          About
        </Text>
        <Link href="https://support.every.org" sx={styles.menuItem}>
          Support
        </Link>
        <Link
          href="https://www.every.org/terms"
          target="_blank"
          sx={styles.menuItem}
        >
          Terms
        </Link>
      </Flex>
      <Box sx={styles.closeContainer} onClick={closeModal}>
        <CloseIcon />
      </Box>
    </Flex>
  )
}
