import { Currency } from './Currency'
import { NonProfit } from './NonProfit'
import { Sponsor } from './Sponsor'

export type CampaignInfo = {
  slug: string
  name: string
  primaryColor: string
  backgroundImageUrl: string
  thankYouImageUrl: string
  bannerUrl: string
  shareText: string
  logoUrl: string
  about: string
  foundingGoal: number
  cause: string
  nonprofits: NonProfit[]
  sponsor?: Sponsor
  currenciesSupported?: Currency[]
}
