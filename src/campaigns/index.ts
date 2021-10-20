import { CampaignInfo } from 'types/CampaignInfo'
import { Cause } from 'types/Cause'
import { NonProfit } from 'types/NonProfit'
import { Sponsor } from 'types/Sponsor'
import { default as science } from './a-brighter-future.json'
import { default as afghanistan } from './afghanistan-humanitarian-aid.json'
import { default as animals } from './animal.welfare.json'
import { default as antiracism } from './antiracism.json'
import { default as education } from './educationeverywhere.json'
import { default as charitysufferfest2021 } from './charitysufferfest2021.json'
import { default as health } from './effectivehealthcareeverywhere.json'
import { default as poverty } from './endingglobalpoverty.json'
import { default as gerc } from './gerc.json'
import { default as lgbtq } from './lgbtq+.json'
import { default as mads } from './mads.json'
import { default as fff } from './fff.json'
import { default as bubsworld } from './bubsworld.json'
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

export const campaigns: Record<string, CampaignInfo> = {
  animals: { slug: 'animals', ...(animals as CampaignJson) },
  education: { slug: 'education', ...(education as CampaignJson) },
  charitysufferfest2021: {
    slug: 'charitysufferfest2021',
    ...(charitysufferfest2021 as CampaignJson)
  },
  antiracism: { slug: 'antiracism', ...(antiracism as CampaignJson) },
  lgbtq: { slug: 'lgbtq', ...(lgbtq as CampaignJson) },
  health: { slug: 'health', ...(health as CampaignJson) },
  poverty: { slug: 'poverty', ...(poverty as CampaignJson) },
  climate: { slug: 'climate', ...(climate as CampaignJson) },
  science: { slug: 'science', ...(science as CampaignJson) },
  mads: { slug: 'mads', ...(mads as CampaignJson) },
  fff: { slug: 'fff', ...(fff as CampaignJson) },
  bubsworld: { slug: 'bubsworld', ...(bubsworld as CampaignJson) },
  lilbub: { slug: 'lilbub', ...(lilbub as CampaignJson) },
  afghanistan: { slug: 'afghanistan', ...(afghanistan as CampaignJson) },
  gerc: { slug: 'gerc', ...(gerc as CampaignJson) }
}
