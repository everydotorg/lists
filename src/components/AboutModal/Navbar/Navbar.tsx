import { CloseIcon } from 'src/components/CloseIcon'
import { useAboutModal } from 'src/hooks/useAboutModal'
import { Box, Flex, Text, Link } from 'theme-ui'
import { styles } from './navbarStyles'

export type Section = 'about'

type NavbarProps = {
  selected: Section
}

export const Navbar = ({ selected }: NavbarProps) => {
  const aboutModal = useAboutModal()

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
        <Link href="mailto:support@every.org" sx={styles.menuItem}>
          Contact
        </Link>
        <Link
          href="https://www.every.org/terms"
          target="_blank"
          sx={styles.menuItem}
        >
          Terms
        </Link>
      </Flex>
      <Box sx={styles.closeContainer} onClick={() => aboutModal.setOpen(false)}>
        <CloseIcon />
      </Box>
    </Flex>
  )
}
