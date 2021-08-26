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
  const { primaryColor, slug, socialShareText, name, previewImage } =
    campaignInfo

  const color = new Color(primaryColor, 'hex')

  const campaignTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: color.hex(),
      primaryHover: color.darken(0.2).hex(),
      primaryBg: color.alpha(0.1).hsl().string()
    }
  }

  const url = baseUrlWithPaths(campaignInfo.slug)
  const title = `${name} • giveli.st/${slug}`

  return (
    <ThemeProvider theme={campaignTheme}>
      <CampaignInfoContext.Provider value={{ ...campaignInfo }}>
        <Head>
          <title>{title}</title>
          <link rel="canonical" href={url} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={socialShareText} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={socialShareText} />
          <meta property="og:image" content={previewImage} />
          <meta name="twitter:card" content="summary_large_image" />
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
