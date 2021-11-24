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

    if (!('sponsor' in campaignInfo)) {
      campaignInfo.sponsor = {
        ratio: '1-for-1',
        threshold: 100,
        // upTo: 250000,
        description:
          'Amplify your gift this November! Generous donors will match you dollar-for-dollar up to $100 on any list, until we reach $525,000 total matched.'
      }
    }

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
