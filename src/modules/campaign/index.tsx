import { Flex, Text } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { Logo } from './Logo'
import { styles } from './styles'

export const Campaign = (): JSX.Element => {
  const { name, about } = useCampaignInfoContext()
  return (
    <Flex sx={styles.container}>
      <Logo />
      <Flex sx={styles.campaignInfo}>
        <Text sx={styles.campaignTitle} variant="title">
          {name}
        </Text>
        <Text variant="small">{about}</Text>
      </Flex>
    </Flex>
  )
}
