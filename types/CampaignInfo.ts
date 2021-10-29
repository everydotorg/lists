import { Cause } from './Cause'
import { NonProfit } from './NonProfit'
import { Sponsor } from './Sponsor'

export type CampaignInfo = {
  slug: string
  showOnHomepage?: true
  everySlug?: string
  name: string
  primaryColor: string
  imageUrl: string
  mobileBannerUrl: string
  bannerUrl: string
  socialShareText: string
  previewImage: string
  about: string
  fundingGoal?: number
  cause: Cause
  nonprofits: NonProfit[]
  sponsor?: Sponsor
  showGoalOnListPage?: boolean
  showGoalOnThankyouPage?: boolean
  donated?: number
  givers?: number
}

// Complete CampaignInfo which does not contain an everySlug so can't have missing props to be filled from the Every.org API
export type FullLocalCampaignInfo = Omit<
  CampaignInfo,
  'everySlug' | 'donated' | 'givers' | 'nonprofits'
> & {
  nonprofits: Array<Partial<NonProfit> & { slug: string }>
}

// With everySlug all other props are optional because the can be looked up in Every.org API
export type BaseLocalCampaignInfo = Partial<
  Omit<CampaignInfo, 'donated' | 'givers' | 'nonprofits'>
> & {
  everySlug: string
  nonprofits: Array<Partial<NonProfit> & { slug: string }>
}

// When we provide CampaignInfo locally it must be either full or contain an everySlug
export type LocalCampaignInfo = FullLocalCampaignInfo | BaseLocalCampaignInfo
