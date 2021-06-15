import { Box, Flex, Text, Link } from 'theme-ui'
import { CloseIcon } from '../../shared/CloseIcon'
import { Divider } from '../../shared/Divider'
import { EveryOrgLogo } from '../../shared/EveryOrgLogo'
import { styles } from './styles'

type AboutProps = {
  onClose: () => void
}

export const About: React.FC<AboutProps> = ({ onClose }) => {
  return (
    <Flex sx={styles.container}>
      <Flex sx={styles.content}>
        <Flex sx={styles.header}>
          <Text variant="large" sx={{ color: 'text' }}>
            <strong>giveli.st</strong> a simple and fast way to create and share
            your own list of recommended nonprofits.
          </Text>
          <Box id="close-about" sx={styles.closeBox} onClick={onClose}>
            <CloseIcon />
          </Box>
        </Flex>
        <Text variant="title" sx={{ color: 'textGray', fontWeight: 400 }}>
          Givelist clearly shows the giver who they are donating to and handles
          the entire giving experience, from payment step, tax receipt, and
          payout to each of the nonprofits - all actioned directly from the
          Givelist.
        </Text>
      </Flex>
      <Divider space={2} sx={styles.divider} />
      <Flex sx={styles.footer}>
        <Link
          href="https://www.every.org/terms"
          target="_blank"
          variant="smallSubtle"
        >
          See terms
        </Link>
        <Flex sx={styles.branding}>
          <Text variant="small" sx={{ fontSize: [2, 0] }}>
            Powered by
          </Text>
          <EveryOrgLogo />
        </Flex>
      </Flex>
    </Flex>
  )
}
