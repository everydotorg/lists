import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getCampaignInfo, getCampaignSlugs } from 'src/services/getCampaignInfo'

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getCampaignSlugs().map((campaign) => ({
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
