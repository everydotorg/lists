import { Box, Flex, Text, Link } from 'theme-ui'
import { pushEvent } from '../../../utils/gtag'
import { CloseIcon } from '../../shared/CloseIcon'
import { Divider } from '../../shared/Divider'
import { EveryOrgLogo } from '../../shared/EveryOrgLogo'
import { styles } from './styles'

type AboutProps = {
  onClose: () => void
}

export const About: React.FC<AboutProps> = ({ onClose }) => {
  const pushClosedEvent = () => {
    pushEvent(`about_close`, {})
    onClose()
  }

  const pushRegisterInterestToAnalytics = () => {
    pushEvent('about_register-interest', {})
  }

  return (
    <Flex sx={styles.container}>
      <Flex sx={styles.content}>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Text variant="large" sx={{ color: 'text' }}>
            <strong>giveli.st</strong> is a simple and fast way to create and
            share a list of recommended nonprofits.
          </Text>
          <Box sx={styles.closeBox} onClick={pushClosedEvent}>
            <CloseIcon />
          </Box>
        </Flex>
        <Text variant="title" sx={styles.aboutText}>
          Givelist clearly shows which 501(c)(3) nonprofits your donation will
          support. It also handles the entire giving experience, from payment
          step, tax receipt, and payout to each of the nonprofits - all
          simplified directly from the Givelist. Want to make your own Givelist?{' '}
          <Link
            onClick={pushRegisterInterestToAnalytics}
            href="https://everydotorg.typeform.com/to/gfY2ziot"
            target="_blank"
          >
            Register interest!
          </Link>
        </Text>
        <Text variant="title" sx={styles.aboutText}>
          An always free public good service, Givelist is brought to you by{' '}
          <Link target="_blank" href="https://p22.studio/">
            P22 Studio
          </Link>
          , and{' '}
          <Link target="_blank" href="https://every.org/about-us">
            Every.org
          </Link>{' '}
          - a registered 501(c)(3) nonprofit on a mission to provide free
          technologies and tools that encourage individuals to take action and
          spread generosity. Original concept by{' '}
          <Link target="_blank" href="https://www.bettergivingstudio.com/">
            Better Giving Studio
          </Link>{' '}
          and{' '}
          <Link
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
          >
            Licensed under CC BY 4.0.
          </Link>
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
