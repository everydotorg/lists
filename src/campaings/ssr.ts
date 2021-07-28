import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getCampaignInfo } from 'src/services/getCampaignInfo'

export const campaigns = [
  'endfactoryfarming',
  'educationeverywhere',
  'antiracism',
  'lgbtq+',
  'effectivehealthcareeverywhere',
  'endingglobalpoverty',
  'tacklingclimatechange',
  'a-brighter-future'
]

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: campaigns.map((campaign) => ({
      params: {
        campaign
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const campaignInfo = getCampaignInfo(params?.campaign as string)

  return {
    props: {
      campaignInfo
    }
  }
}
