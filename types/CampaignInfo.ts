import { Currency } from './Currency'
import { NonProfit } from './NonProfit'
import { Sponsor } from './Sponsor'

export type CampaignInfo = {
  slug: string
  everySlug: string
  name: string
  primaryColor: string
  imageUrl: string
  backgroundImageUrl: string // @todo: deprecate
  thankYouImageUrl: string
  bannerUrl: string
  socialShareText: string
  socialShareIncentive: string
  previewImage: string
  logoUrl: string
  about: string
  fundingGoal: number
  cause: string
  nonprofits: NonProfit[]
  sponsor?: Sponsor
  currenciesSupported?: Currency[]
  defaultDonationAmount: number
}
