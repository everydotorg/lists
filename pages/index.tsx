import { GetStaticProps } from 'next'
import { campaigns } from 'src/campaings/ssr'
import { Home, HomeProps } from 'src/pages/Home'
import { getCampaignInfo } from 'src/services/getCampaignInfo'

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
  return <Home nonProfits={nonProfits} />
}

export default Homepage
