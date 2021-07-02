import { Flex, Box } from '@theme-ui/components'
import { useHistory } from 'react-router'
import { Text } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { pushEvent } from 'services/gtag'
import { CloseIcon } from '../../shared/CloseIcon'
import { styles } from './styles'

export const Header = (): JSX.Element => {
  const { name } = useCampaignInfoContext()
  const history = useHistory()

  const closeDonatePage = () => {
    pushEvent(`donate_close`, {})
    history.goBack()
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
