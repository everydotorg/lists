import { Icon } from 'src/components/Icon'
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
        <Link
          href="https://support.every.org/hc/en-us/sections/4406332582803-Givelist?utm_source=givelist"
          target="_blank"
          sx={styles.menuItem}
        >
          Support
        </Link>
        <Link
          href="https://www.every.org/terms?utm_source=givelist"
          target="_blank"
          sx={styles.menuItem}
        >
          Terms
        </Link>
        <Link
          href="https://www.every.org/privacy?utm_source=givelist"
          target="_blank"
          sx={styles.menuItem}
        >
          Privacy
        </Link>
      </Flex>
      <Box sx={styles.closeContainer} onClick={closeModal}>
        <Icon.Close />
      </Box>
    </Flex>
  )
}
