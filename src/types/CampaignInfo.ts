import { NonProfit } from './NonProfit'
import { Progress } from './Progress'
import { Sponsor } from './Sponsor'

export type CampaignInfo = {
  slug: string
  name: string
  primaryColor: string
  backgroundImageUrl: string
  thankYouImageUrl: string
  shareText: string
  logoUrl: string
  about: string
  progress?: Progress
  cause: string
  nonprofits: NonProfit[]
  sponsor?: Sponsor
}
