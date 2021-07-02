import { Box, ThemeProvider } from 'theme-ui'
import { theme } from 'styles/theme'
import { useEffect, useState } from 'react'
import { getCampaignInfo } from 'services/getCampaignInfo'
import { CampaignInfo } from 'types/CampaignInfo'
import { CampaignInfoContext } from 'contexts/CampaignInfoContext'
import { Banner } from 'modules/shared/Banner'
import { getDefaultAmountAbTest } from 'services/donation-amount-ab-test'
import { pushEvent } from 'services/gtag'
import { useRouter } from 'next/router'

const defaultDonationAmount = getDefaultAmountAbTest()

export const CampaignLayout: React.FC = ({ children }) => {
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

    if (campaign) {
      fetchCampaignInfo()
    }
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
          {children}
        </Box>
      </CampaignInfoContext.Provider>
    </ThemeProvider>
  )
}
