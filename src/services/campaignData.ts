import { campaigns } from 'src/campaigns'
import {
  BaseLocalCampaignInfo,
  CampaignInfo,
  LocalCampaignInfo
} from 'types/CampaignInfo'
import { getGivelistData } from './every'

export const getCampaignData = async (
  slug: string,
  includeGoalData = false
) => {
  const campaignInfo = campaigns[slug]

  if (!campaignInfo) {
    // If we have no local info, try getting it all from Every.org API
    return withEdoData(slug)
  }

  // We have local info but we might still need more from Every.org API
  if ('everySlug' in campaignInfo) {
    // campaignInfo is type BaseLocalCampaignInfo because it has everySlug

    // If local info isn't complete we need to get the rest from Every.org API
    if (!isCompleteCampaign(campaignInfo))
      return withEdoData(slug, campaignInfo)

    // If we need goal data, get it from Every.org API
    const showGoal =
      campaignInfo.showGoalOnListPage || campaignInfo.showGoalOnThankyouPage
    if (includeGoalData && showGoal) return withEdoData(slug, campaignInfo)
  }

  // return local data without hitting Every.org API
  return { campaignInfo: campaignInfo as CampaignInfo, fromApi: false }
}

const withEdoData = async (
  slug: string,
  campaignInfo?: BaseLocalCampaignInfo
) => {
  // use everySlug from campaignInfo if available - the slug on Every.org might be different to ours
  const everyListData = await getGivelistData(campaignInfo?.everySlug || slug)

  const nonprofits = []
  // Go through each nonprofit in our local data and merge with Every.org data
  if (campaignInfo?.nonprofits) {
    for (const nonprofit of campaignInfo.nonprofits) {
      const edoNonprofit = everyListData.nonprofits.find(
        ({ slug }) => slug === nonprofit.slug
      )
      if (edoNonprofit) {
        nonprofits.push({
          ...edoNonprofit,
          ...nonprofit
        })
      }
    }
  }
  // Add any nonprofits from Every.org that weren't in local data
  for (const nonprofit of everyListData.nonprofits) {
    const inList = nonprofits.some(({ slug }) => slug === nonprofit.slug)
    if (!inList) {
      nonprofits.push(nonprofit)
    }
  }

  return {
    campaignInfo: {
      ...everyListData,
      // apply any local overrides
      ...campaignInfo,
      // add merged nonprofits
      nonprofits
    } as CampaignInfo,
    fromApi: true
  }
}

const requiredKeys: Array<keyof LocalCampaignInfo> = [
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

export const isCompleteCampaign = (
  campaignInfo: Partial<LocalCampaignInfo>
) => {
  for (const key of requiredKeys) {
    if (!(key in campaignInfo)) return false
  }
  return true
}
