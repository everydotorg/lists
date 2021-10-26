import { Cause } from './Cause'
import { NonProfit } from './NonProfit'
import { Sponsor } from './Sponsor'

export type CampaignInfo = {
  slug: string
  showOnHomepage?: true
  everySlug: string
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
}
