import { CampaignInfoContext } from 'src/contexts/CampaignInfoContext'
import { Banner } from 'src/components/Banner'
import Head from 'next/head'
import { ReactNode } from 'react'
import { theme } from 'src/styles/theme'
import { Box, ThemeProvider } from 'theme-ui'
import { CampaignInfo } from 'types/CampaignInfo'
import { AboutModalProvider } from 'src/contexts/AboutModalContext'
import { baseUrlWithPaths } from 'src/services/url'

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
  const campaignTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: campaignInfo.primaryColor
    }
  }
  return (
    <ThemeProvider theme={campaignTheme}>
      <CampaignInfoContext.Provider value={{ ...campaignInfo }}>
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
          <meta name="description" content={campaignInfo.socialShareText} />

          {/* og */}
          <meta property="og:title" content={campaignInfo.name} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={baseUrlWithPaths(campaignInfo.slug)}
          />
          <meta
            property="og:description"
            content={campaignInfo.socialShareText}
          />
          <meta property="og:image" content={campaignInfo.previewImage} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content={baseUrlWithPaths(campaignInfo.slug)}
          />
          <meta name="twitter:title" content={campaignInfo.name} />
          <meta
            name="twitter:description"
            content={campaignInfo.socialShareText}
          />
          <meta name="twitter:image" content={campaignInfo.previewImage} />
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
