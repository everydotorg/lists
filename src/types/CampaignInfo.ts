import { NonProfit } from './NonProfit'
import { Sponsor } from './Sponsor'

export type CampaignInfo = {
  name: string
  primaryColor: string
  backgroundImageUrl: string
  thankYouImageUrl: string
  shareText: string
  logoUrl: string
  about: string
  goal: number
  donated: number
  givers: number
  cause: string
  nonprofits: NonProfit[]
  sponsor?: Sponsor
}
