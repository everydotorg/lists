import { GetStaticProps } from 'next'
import { campaigns } from 'src/campaings/ssr'
import { AboutModalProvider } from 'src/contexts/AboutModalContext'
import { Home, HomeProps } from 'src/pages/Home'
import { getCampaignInfo } from 'src/services/getCampaignInfo'
import { ThemeProvider } from 'theme-ui'
import { theme } from 'src/styles/theme'

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

const Homepage = ({ nonProfits }: HomeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AboutModalProvider>
        <Home nonProfits={nonProfits} />
      </AboutModalProvider>
    </ThemeProvider>
  )
}

export default Homepage
