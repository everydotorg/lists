import { CampaignInfo } from 'types/CampaignInfo'
import { Cause } from 'types/Cause'
import { NonProfit } from 'types/NonProfit'
import { Sponsor } from 'types/Sponsor'
import { default as science } from './a-brighter-future.json'
import { default as afghanistan } from './afghanistan-humanitarian-aid.json'
import { default as animals } from './animal.welfare.json'
import { default as antiracism } from './antiracism.json'
import { default as education } from './educationeverywhere.json'
import { default as health } from './effectivehealthcareeverywhere.json'
import { default as poverty } from './endingglobalpoverty.json'
import { default as gerc } from './gerc.json'
import { default as lgbtq } from './lgbtq+.json'
import { default as lilbub } from './lilbub.json'
import { default as climate } from './tacklingclimatechange.json'

export type CampaignJson = {
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
  cause: Cause
  nonprofits: NonProfit[]
  sponsor?: Sponsor
  showGoalOnListPage?: boolean
  showGoalOnThankyouPage?: boolean
}

const transform = (raw: CampaignJson): CampaignInfo => ({
  slug: raw.everySlug,
  ...raw
})

export const campaigns: CampaignInfo[] = [
  transform(animals as CampaignJson),
  transform(education as CampaignJson),
  transform(antiracism as CampaignJson),
  transform(lgbtq as CampaignJson),
  transform(health as CampaignJson),
  transform(poverty as CampaignJson),
  transform(climate as CampaignJson),
  transform(science as CampaignJson),
  transform(lilbub as CampaignJson),
  transform(afghanistan as CampaignJson),
  transform(gerc as CampaignJson)
]
