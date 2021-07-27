import { CampaignInfoContext } from 'src/contexts/CampaignInfoContext'
import { Banner } from 'src/components/Banner'
import Head from 'next/head'
import { ReactNode } from 'react'
import { getDefaultAmountAbTest } from 'src/services/donation-amount-ab-test'
import { theme } from 'src/styles/theme'
import { Box, ThemeProvider } from 'theme-ui'
import { CampaignInfo } from 'types/CampaignInfo'
import { AboutModalProvider } from 'src/contexts/AboutModalContext'

const defaultDonationAmount = getDefaultAmountAbTest()

type CampaignLayoutProps = {
  campaignInfo: CampaignInfo
  showAbout?: boolean
  showDiscover?: boolean
  showBackExamples?: boolean
  children: ReactNode
}

// @TODO: delete
export const CampaignLayout = ({
  campaignInfo,
  showAbout = true,
  showDiscover = false,
  showBackExamples = false,
  children
}: CampaignLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CampaignInfoContext.Provider
        value={{ ...campaignInfo, defaultDonationAmount }}
      >
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', 'GTM-PTXWSQK');`
            }}
          />
          <title>{campaignInfo.name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={campaignInfo.name} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://giveli.st/${campaignInfo.slug}`}
          />
          <meta
            property="og:description"
            content={campaignInfo.socialShareText}
          />
          <meta property="og:image" content={campaignInfo.previewImage} />
          <meta
            name="description"
            content="giveli.st a simple and fast way to create and share your own list of recommended nonprofits."
          />
        </Head>
        <Box
          sx={{
            height: '100%',
            background: 'white',
            display: 'flex'
          }}
        >
          <AboutModalProvider>
            <Banner
              showAbout={showAbout}
              showDiscover={showDiscover}
              showBackExamples={showBackExamples}
            />
            {children}
          </AboutModalProvider>
        </Box>
      </CampaignInfoContext.Provider>
    </ThemeProvider>
  )
}
