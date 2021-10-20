import Head from 'next/head'
import { campaigns } from 'src/campaigns'
import { AboutModalProvider } from 'src/contexts/AboutModalContext'
import { Home, HomeProps } from 'src/pages/Home'
import { baseUrl, baseUrlWithPaths } from 'src/services/url'
import { theme } from 'src/styles/theme'
import { ThemeProvider } from 'theme-ui'

const showOnHomepage = new Set([
  'poverty',
  'lgbtq',
  'education',
  'health',
  'afghanistan',
  'animals',
  'antiracism',
  'science',
  'climate'
])

const nonProfits: HomeProps['nonProfits'] = Object.values(campaigns)
  .filter((campaign) => showOnHomepage.has(campaign.slug))
  .map((info) => ({
    slug: info.slug,
    name: info.name,
    imageUrl: info.imageUrl,
    about: info.about,
    cause: info.cause,
    nonprofits: info.nonprofits,
    sponsor: info.sponsor ? info.sponsor : undefined
  }))

export const Tagline =
  'Discover, donate, and share recommended lists of nonprofits.'

const Homepage = () => {
  const title = `giveli.st • ${Tagline}`

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

export default Homepage
