import { GetStaticProps } from 'next'
import Head from 'next/head'
import { campaigns } from 'src/campaigns'
import { AboutModalProvider } from 'src/contexts/AboutModalContext'
import { Home } from 'src/pages/Home'
import { getCampaignData } from 'src/services/campaignData'
import { baseUrl, baseUrlWithPaths } from 'src/services/url'
import { theme } from 'src/styles/theme'
import { ThemeProvider } from 'theme-ui'
import { CampaignInfo } from 'types/CampaignInfo'

export const Tagline =
  'Discover, donate, and share recommended lists of nonprofits.'

const Homepage = ({ nonProfits }: { nonProfits: CampaignInfo[] }) => {
  const title = `Every.org Lists • ${Tagline}`

  const description =
    'A trusted place where you can champion worthy causes. Created by a nonprofit. Forever free.'

  const url = baseUrl()

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={baseUrlWithPaths('social-banner.png')}
        />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AboutModalProvider>
        <Home nonProfits={nonProfits} />
      </AboutModalProvider>
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const promises = Object.values(campaigns)
    .filter((campaign) => campaign.showOnHomepage && campaign.slug)
    .map((campaign) =>
      getCampaignData(campaign.slug as string).then(
        ({ campaignInfo }) => campaignInfo
      )
    )

  return {
    props: {
      nonProfits: await Promise.all(promises)
    }
  }
}

export default Homepage
