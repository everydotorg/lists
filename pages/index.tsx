import { GetStaticProps } from 'next'
import { campaigns } from 'src/campaings/ssr'
import { AboutModalProvider } from 'src/contexts/AboutModalContext'
import { Home, HomeProps } from 'src/pages/Home'
import { getCampaignInfo } from 'src/services/getCampaignInfo'
import { ThemeProvider } from 'theme-ui'
import { theme } from 'src/styles/theme'
import Head from 'next/head'
import { baseUrl, baseUrlWithPaths } from 'src/services/url'

export const getStaticProps: GetStaticProps = async () => {
  const nonProfits = campaigns
    .map((campaign) => getCampaignInfo(campaign))
    .map((info) => ({
      slug: info.slug,
      name: info.name,
      imageUrl: info.imageUrl,
      about: info.about,
      cause: info.cause
    }))

  return {
    props: {
      nonProfits
    }
  }
}

const excludedFromHomepage = ['lilbub']

const Homepage = ({ nonProfits }: HomeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>giveli.st</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Discover, support, and share recommended nonprofits."
        />

        <meta property="og:title" content="giveli.st" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl()} />
        <meta
          property="og:image"
          content={baseUrlWithPaths('social-banner.png')}
        />
        <meta
          property="og:description"
          content="A trusted place where you can champion worthy causes via social media. Created by a nonprofit. Forever free."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={baseUrl()} />
        <meta name="twitter:title" content="giveli.st" />
        <meta
          name="twitter:image"
          content={baseUrlWithPaths('social-banner.png')}
        />
        <meta
          name="twitter:description"
          content="A trusted place where you can champion worthy causes via social media. Created by a nonprofit. Forever free."
        />
      </Head>
      <AboutModalProvider>
        <Home
          nonProfits={nonProfits.filter(
            (nonprofit) => !excludedFromHomepage.includes(nonprofit.slug)
          )}
        />
      </AboutModalProvider>
    </ThemeProvider>
  )
}

export default Homepage
