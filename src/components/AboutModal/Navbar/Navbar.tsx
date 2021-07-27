import { CloseIcon } from 'src/components/CloseIcon'
import { useAboutModal } from 'src/hooks/useAboutModal'
import { Box, Flex, Text } from 'theme-ui'
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
          variant="caption"
          sx={{
            ...styles.menuItem,
            ...(selected === 'about' ? { fontWeight: 'bold' } : {})
          }}
        >
          About
        </Text>
      </Flex>
      <Box sx={styles.closeContainer} onClick={() => aboutModal.setOpen(false)}>
        <CloseIcon />
      </Box>
    </Flex>
  )
}
