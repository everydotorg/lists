import { campaigns } from 'src/campaigns'
import { CampaignInfo } from 'types/CampaignInfo'
import { getGivelistData } from './every'

export const getCampaignData = async (slug: string) => {
  const campaignInfo = campaigns[slug]

  // If we don't have an every slug, we don't want to get data from the API
  if (campaignInfo && !('everySlug' in campaignInfo)) {
    return {
      props: {
        campaignInfo: {
          ...campaignInfo,
          // These values normally come from the API
          givers: 0,
          donated: 0
        } as CampaignInfo
      }
    }
  }

  // if we have no local campaignInfo try getting by slug from the every.org API
  const everySlug = campaignInfo ? campaignInfo.everySlug : slug
  const everyListData = await getGivelistData(everySlug)

  return {
    ...everyListData,
    // apply any local overrides
    ...campaignInfo
  } as CampaignInfo
}
