import { Box, ThemeProvider } from 'theme-ui'
import { theme } from './theme'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from 'react-router-dom'
import { Campaign } from './modules/campaign'
import { Thanks } from './modules/thanks'
import { useEffect, useState } from 'react'
import { getCampaignInfo } from './api/getCampaignInfo'
import { CampaignInfo } from './types/CampaignInfo'
import { CampaignInfoContext } from './contexts/CampaignInfoContext'

const Givelist = (): JSX.Element => {
  const { campaignSlug } = useParams<{ campaignSlug: string }>()
  const [campaignTheme, setCampaignTheme] = useState(theme)
  const [campaignInfo, setCampaignInfo] = useState<CampaignInfo>(
    {} as CampaignInfo
  )

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
      setCampaignTheme(newTheme)
      setCampaignInfo(campaignInfo)
    }

    fetchCampaignInfo()
  }, [campaignSlug])

  return (
    <ThemeProvider theme={campaignTheme}>
      <CampaignInfoContext.Provider value={campaignInfo}>
        <Box
          sx={{
            width: ['100%', '40vw'],
            margin: '0 auto',
            background: 'white',
            minHeight: '100vh'
          }}
        >
          <Router>
            <Switch>
              <Route path="/:campaignSlug">
                <Campaign />
              </Route>
              <Route path="/:campaignSlug/thanks">
                <Thanks />
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
        <Route exact path="/:campaignSlug">
          <Givelist />
        </Route>
        <Route path="*">
          <Redirect to="/lil-bulb" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
