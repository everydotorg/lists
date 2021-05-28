import { NonProfit } from './NonProfit'

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
}
