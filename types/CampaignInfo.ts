import { NonProfit } from './NonProfit'
import { Sponsor } from './Sponsor'

export type CampaignInfo = {
  slug: string
  everySlug: string
  name: string
  primaryColor: string
  imageUrl: string
  mobileBannerUrl: string
  bannerUrl: string
  socialShareText: string
  previewImage: string
  about: string
  fundingGoal: number
  cause: string
  nonprofits: NonProfit[]
  sponsor?: Sponsor
  showGoalOnListPage?: boolean
  showGoalOnThankyouPage?: boolean
}
