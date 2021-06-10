import { Button, Flex, Text, Box } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { Divider } from '../shared/Divider'
import { Header } from './Header'
import { styles } from './styles'
import { NonProfit } from './NonProfit'
import { Cause } from './Cause'
import { useHistory, useLocation } from 'react-router'
import { isIOS } from '../../utils/isIOS'
import { Matching } from './Matching'

export const Campaign = (): JSX.Element => {
  const { name, about, nonprofits, sponsor } = useCampaignInfoContext()
  const history = useHistory()
  const location = useLocation()

  const goToDonation = () => {
    history.push(`${location.pathname}/donate`)
  }

  return (
    <Box
      as="main"
      sx={{
        ...styles.page,
        height: isIOS() ? '-webkit-fill-available' : '100vh'
      }}
    >
      <Flex sx={styles.container}>
        <Header onClickDonate={goToDonation} />
        <Flex sx={styles.campaignInfo}>
          <Text sx={styles.campaignTitle} variant="title">
            {name}
          </Text>
          <Text variant="small">{about}</Text>
          {sponsor && (
            <>
              <Divider space={[3, 6]} />
              <Matching sponsor={sponsor} />
            </>
          )}
        </Flex>
        <Cause />
        <Box sx={styles.nonprofitsContainer}>
          {nonprofits &&
            nonprofits.map((nonprofit) => (
              <>
                <Divider space={0} color="muted" />
                <NonProfit key={nonprofit.slug} nonprofit={nonprofit} />
              </>
            ))}
        </Box>
      </Flex>
      <Box sx={styles.buttonContainer}>
        <Button sx={styles.submitButton} onClick={goToDonation} type="button">
          Donate to List
        </Button>
      </Box>
    </Box>
  )
}
