import { Box, ThemeProvider } from 'theme-ui'
import { theme } from './theme'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Campaign } from './modules/campaign'
import { ThankYou } from './modules/thank-you'
import { useEffect, useState } from 'react'
import { getCampaignInfo } from './services/getCampaignInfo'
import { CampaignInfo } from './types/CampaignInfo'
import { CampaignInfoContext } from '../contexts/CampaignInfoContext'
import { Donation } from './modules/donation'
import { Banner } from './modules/shared/Banner'
import { getDefaultAmountAbTest } from '../services/donation-amount-ab-test'
import { pushEvent } from './utils/gtag'

const defaultDonationAmount = getDefaultAmountAbTest()

const Givelist = (): JSX.Element => {
  // The url is hardcoded and will always be /lilbub until we have more campaigns
  const campaignSlug = 'lilbub'
  // const { campaignSlug } = useParams<{ campaignSlug: string }>()
  const [campaignTheme, setCampaignTheme] = useState(theme)
  const [campaignInfo, setCampaignInfo] = useState<CampaignInfo>(
    {} as CampaignInfo
  )

  useEffect(() => {
    pushEvent('default_donation_amount', { amount: defaultDonationAmount })
  }, [])

  useEffect(() => {
    const fetchCampaignInfo = async () => {
      const campaignInfo = await getCampaignInfo(campaignSlug)
      const newTheme = {
        ...theme,
        colors: {
          ...theme.colors,
          primary: campaignInfo.primaryColor
        }
      }
      document.title = campaignInfo.name
      setCampaignTheme(newTheme)
      setCampaignInfo(campaignInfo)
    }

    fetchCampaignInfo()
  }, [campaignSlug])

  return (
    <ThemeProvider theme={campaignTheme}>
      <CampaignInfoContext.Provider
        value={{ ...campaignInfo, defaultDonationAmount }}
      >
        <Box
          sx={{
            width: ['100%', '100vw'],
            margin: '0 auto',
            background: 'white',
            display: [null, 'grid'],
            gridTemplateColumns: [null, '1fr 1fr']
          }}
        >
          <Banner />

          <Router>
            <Switch>
              <Route exact path="/:campaignSlug/thank-you">
                <ThankYou />
              </Route>
              <Route exact path="/:campaignSlug/donate">
                <Donation />
              </Route>
              <Route path="/:campaignSlug">
                <Campaign />
              </Route>
            </Switch>
          </Router>
        </Box>
      </CampaignInfoContext.Provider>
    </ThemeProvider>
  )
}

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        {/* Hardcoded for now until we have more active campaigns /*}
        {/* <Route path="/:campaignSlug"> */}
        <Route path="/lilbub">
          <Givelist />
        </Route>
        <Route exact path="/">
          <Redirect to="/lilbub" />
        </Route>
        <Route path="*">
          <Redirect to="/lilbub" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
