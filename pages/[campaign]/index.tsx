import { Box, ThemeProvider } from 'theme-ui'
import { theme } from 'styles/theme'
import { Campaign } from 'src/modules/campaign'
import { useEffect, useState } from 'react'
import { getCampaignInfo } from 'src/services/getCampaignInfo'
import { CampaignInfo } from 'src/types/CampaignInfo'
import { CampaignInfoContext } from 'contexts/CampaignInfoContext'
import { Banner } from 'src/modules/shared/Banner'
import { getDefaultAmountAbTest } from 'services/donation-amount-ab-test'
import { pushEvent } from 'src/utils/gtag'
import { useRouter } from 'next/router'

const defaultDonationAmount = getDefaultAmountAbTest()

const App = () => {
  const router = useRouter()
  const { campaign } = router.query

  const [campaignTheme, setCampaignTheme] = useState(theme)
  const [campaignInfo, setCampaignInfo] = useState<CampaignInfo>(
    {} as CampaignInfo
  )

  useEffect(() => {
    pushEvent('default_donation_amount', { amount: defaultDonationAmount })
  }, [])

  useEffect(() => {
    const fetchCampaignInfo = async () => {
      const campaignInfo = await getCampaignInfo(campaign as string)
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
  }, [campaign])

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
          <Campaign />
        </Box>
      </CampaignInfoContext.Provider>
    </ThemeProvider>
  )
}

export default App
