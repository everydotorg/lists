import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getCampaignInfo } from 'src/services/getCampaignInfo'

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { campaign: 'lilbub' } },
      { params: { campaign: 'endfactoryfarming' } },
      { params: { campaign: 'educationeverywhere' } },
      { params: { campaign: 'antiracism' } },
      { params: { campaign: 'lgbtq+' } },
      { params: { campaign: 'effectivehealthcareeverywhere' } },
      { params: { campaign: 'endingglobalpoverty' } },
      { params: { campaign: 'tacklingclimatechange' } },
      { params: { campaign: 'scienceandtechnology' } }
    ],
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
