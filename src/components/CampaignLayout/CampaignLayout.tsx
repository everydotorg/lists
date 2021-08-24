import { CampaignInfoContext } from 'src/contexts/CampaignInfoContext'
import { Banner } from 'src/components/Banner'
import Head from 'next/head'
import { ReactNode } from 'react'
import { theme } from 'src/styles/theme'
import { Box, ThemeProvider } from 'theme-ui'
import { CampaignInfo } from 'types/CampaignInfo'
import { AboutModalProvider } from 'src/contexts/AboutModalContext'
import { baseUrlWithPaths } from 'src/services/url'
import Color from 'color'

type CampaignLayoutProps = {
  campaignInfo: CampaignInfo
  showAbout?: boolean
  showDiscover?: boolean
  showBackList?: boolean
  children: ReactNode
}

// @TODO: delete
export const CampaignLayout = ({
  campaignInfo,
  showAbout = true,
  showDiscover = false,
  showBackList = false,
  children
}: CampaignLayoutProps) => {
  const color = new Color(campaignInfo.primaryColor, 'hex')

  const campaignTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: color.hex(),
      primaryHover: color.darken(0.2).hex(),
      primaryBg: color.alpha(0.1).hsl().string()
    }
  }
  return (
    <ThemeProvider theme={campaignTheme}>
      <CampaignInfoContext.Provider value={{ ...campaignInfo }}>
        <Head>
          <title>{campaignInfo.name} | giveli.st</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={campaignInfo.socialShareText} />

          {/* og */}
          <meta
            property="og:title"
            content={campaignInfo.name + ' | giveli.st'}
          />
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
          <meta
            name="twitter:title"
            content={campaignInfo.name + ' | giveli.st'}
          />
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
              showBackList={showBackList}
            />
            {children}
          </AboutModalProvider>
        </Box>
      </CampaignInfoContext.Provider>
    </ThemeProvider>
  )
}
