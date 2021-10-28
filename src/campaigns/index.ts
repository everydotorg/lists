import { Cause } from 'types/Cause'
import { NonProfit } from 'types/NonProfit'
import { Sponsor } from 'types/Sponsor'
import { default as science } from './a-brighter-future.json'
import { default as afghanistan } from './afghanistan-humanitarian-aid.json'
import { default as animals } from './animal.welfare.json'
import { default as antiracism } from './antiracism.json'
import { default as bubsworld } from './bubsworld.json'
import { default as charitysufferfest2021 } from './charitysufferfest2021.json'
import { default as desmondisamazing } from './desmondisamazing.json'
import { default as education } from './educationeverywhere.json'
import { default as health } from './effectivehealthcareeverywhere.json'
import { default as poverty } from './endingglobalpoverty.json'
import { default as fff } from './fff.json'
import { default as gerc } from './gerc.json'
import { default as juzzy } from './juzzy.json'
import { default as lgbtq } from './lgbtq+.json'
import { default as lilbub } from './lilbub.json'
import { default as mads } from './mads.json'
import { default as climate } from './tacklingclimatechange.json'

export type CampaignJson = {
  slug: string
  everySlug: string
  showOnHomepage?: true
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

export const campaigns: Record<string, CampaignJson> = {
  animals: animals as CampaignJson,
  education: education as CampaignJson,
  charitysufferfest2021: charitysufferfest2021 as CampaignJson,
  antiracism: antiracism as CampaignJson,
  lgbtq: lgbtq as CampaignJson,
  health: health as CampaignJson,
  poverty: poverty as CampaignJson,
  climate: climate as CampaignJson,
  science: science as CampaignJson,
  mads: mads as CampaignJson,
  juzzy: juzzy as CampaignJson,
  desmondisamazing: desmondisamazing as CampaignJson,
  fff: fff as CampaignJson,
  bubsworld: bubsworld as CampaignJson,
  lilbub: lilbub as CampaignJson,
  afghanistan: afghanistan as CampaignJson,
  gerc: gerc as CampaignJson
}
