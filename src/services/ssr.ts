import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { campaigns } from 'src/campaigns'
import { getCampaignData } from 'src/services/campaignData'

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Object.keys(campaigns).map((campaign) => ({
      params: { campaign }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.campaign) return { notFound: true }

  const campaign = params.campaign as string

  try {
    const { campaignInfo, fromApi } = await getCampaignData(campaign, true)

    return {
      props: { campaignInfo },
      revalidate: fromApi ? 60 * 3 : undefined // 3 mins
    }
  } catch (e) {
    console.error(e)
    return {
      notFound: true
    }
  }
}
