import { Button, Flex, Text, Box } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { Divider } from '../shared/Divider'
import { Header } from './Header'
import { styles } from './styles'
import { NonProfit } from './NonProfit'
import { Cause } from './Cause'
import { useHistory, useLocation } from 'react-router'
import { Matching } from './Matching'
import { Fragment } from 'react'

export const Campaign = (): JSX.Element => {
  const { name, about, nonprofits, sponsor } = useCampaignInfoContext()
  const history = useHistory()
  const location = useLocation()

  const goToDonation = () => history.push(`${location.pathname}/donate`)

  return (
    <Box as="main" sx={styles.page}>
      <Flex sx={styles.container}>
        <Header onClickDonate={goToDonation} />
        <Flex sx={styles.campaignInfo}>
          <Text sx={styles.campaignTitle} variant="title">
            {name}
          </Text>
          <Text sx={styles.aboutText} variant="small">
            {about}
          </Text>
          {sponsor && (
            <>
              <Divider space={3} />
              <Matching sponsor={sponsor} />
            </>
          )}
        </Flex>
        <Cause />
        <Box sx={styles.nonprofitsContainer}>
          {nonprofits &&
            nonprofits.map((nonprofit) => (
              <Fragment key={nonprofit.slug}>
                <Divider space={0} color="muted" />
                <NonProfit nonprofit={nonprofit} />
              </Fragment>
            ))}
        </Box>
      </Flex>
      <Box sx={styles.buttonContainer}>
        <Button
          id="campaign-mobile-donate"
          sx={styles.submitButton}
          onClick={goToDonation}
          type="button"
        >
          Donate to List
        </Button>
      </Box>
    </Box>
  )
}
