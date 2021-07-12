import { Flex, Box } from '@theme-ui/components'
import { Text } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { gtag } from 'services/gtag'
import { CloseIcon } from '../../shared/CloseIcon'
import { styles } from './styles'
import { useRouter } from 'next/router'

export const Header = (): JSX.Element => {
  const { name } = useCampaignInfoContext()
  const router = useRouter()

  const closeDonatePage = () => {
    gtag.pushEvent(`donate_close`, {})
    router.back()
  }

  return (
    <Flex sx={styles.headerContainer}>
      <Flex sx={styles.firstLine}>
        <Text variant="title" sx={styles.header}>
          Donating to:
        </Text>
        <Box id="close-donation" sx={styles.closeBox} onClick={closeDonatePage}>
          <CloseIcon />
        </Box>
      </Flex>

      <Text variant="title">{name}</Text>
    </Flex>
  )
}
