import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { campaigns } from 'src/campaigns'

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Object.keys(campaigns).map((campaign) => ({
      params: { campaign }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const campaignInfo = params?.campaign
    ? campaigns[params.campaign as string]
    : {}

  return { props: { campaignInfo } }
}
