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
        <Link href="mailto:contact@giveli.st" sx={styles.menuItem}>
          Contact
        </Link>
      </Flex>
      <Box sx={styles.closeContainer} onClick={() => aboutModal.setOpen(false)}>
        <CloseIcon />
      </Box>
    </Flex>
  )
}
