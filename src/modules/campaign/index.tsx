import { Button, Flex, Text, Box } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { Goal } from './Goal'
import { Divider } from '../shared/Divider'
import { Logo } from './Logo'
import { styles } from './styles'
import { NonProfit } from './NonProfit'
import { Cause } from './Cause'

export const Campaign = (): JSX.Element => {
  const { name, about, nonprofits } = useCampaignInfoContext()
  return (
    <Box as="main" sx={styles.page}>
      <Flex sx={styles.container}>
        <Logo />
        <Flex sx={styles.campaignInfo}>
          <Text sx={styles.campaignTitle} variant="title">
            {name}
          </Text>
          <Text variant="small">{about}</Text>
          <Divider space={3} />
          <Goal />
        </Flex>
        <Cause />
        <Box sx={styles.nonprofitsContainer}>
          {nonprofits &&
            nonprofits.map((nonprofit) => (
              <NonProfit key={nonprofit.slug} nonprofit={nonprofit} />
            ))}
        </Box>
      </Flex>
      <Box sx={styles.buttonContainer}>
        <Button sx={styles.submitButton} onClick={console.log} type="button">
          Donate to List
        </Button>
      </Box>
    </Box>
  )
}
