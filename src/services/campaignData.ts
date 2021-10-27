import { campaigns } from 'src/campaigns'
import { CampaignInfo } from 'types/CampaignInfo'
import { getGivelistData } from './every'

export const getCampaignData = async (
  slug: string,
  includeGoalData = false
) => {
  const campaignInfo = campaigns[slug]

  if (campaignInfo) {
    // If we don't have an every slug, we don't want to get data from the API
    const hasEverySlug = 'everySlug' in campaignInfo
    // If the data is complete we don't need to get any from the API
    const isComplete = isCompleteCampaign(campaignInfo)
    // If we need goal data we need to get it from the API
    const needGoalData =
      includeGoalData &&
      (campaignInfo?.showGoalOnListPage || campaignInfo?.showGoalOnThankyouPage)

    if (!hasEverySlug || (!needGoalData && isComplete)) {
      return { campaignInfo: campaignInfo as CampaignInfo, fromApi: false }
    }
  }

  // if we have no local campaignInfo try getting by slug from the every.org API
  const everySlug = campaignInfo ? campaignInfo.everySlug : slug
  const everyListData = await getGivelistData(everySlug)

  return {
    campaignInfo: {
      ...everyListData,
      // apply any local overrides
      ...campaignInfo
    } as CampaignInfo,
    fromApi: true
  }
}

const requiredKeys: Array<keyof CampaignInfo> = [
  'slug',
  'name',
  'primaryColor',
  'imageUrl',
  'mobileBannerUrl',
  'bannerUrl',
  'socialShareText',
  'previewImage',
  'about',
  'cause',
  'nonprofits'
]

export const isCompleteCampaign = (campaignInfo: Partial<CampaignInfo>) => {
  for (const key of requiredKeys) {
    if (!(key in campaignInfo)) return false
  }
  return true
}
