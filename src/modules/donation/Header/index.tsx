import { Flex } from '@theme-ui/components'
import { Text } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { CloseIcon } from '../../shared/CloseIcon'
import { styles } from './styles'

export const Header = (): JSX.Element => {
  const { name } = useCampaignInfoContext()

  return (
    <Flex sx={styles.headerContainer}>
      <Flex sx={styles.firstLine}>
        <Text variant="title" sx={styles.header}>
          Donating to:
        </Text>
        <CloseIcon />
      </Flex>

      <Text variant="title">{name}</Text>
    </Flex>
  )
}
