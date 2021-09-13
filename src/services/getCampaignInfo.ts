import fs from 'fs'
import path from 'path'
import { CampaignInfo } from 'types/CampaignInfo'

export const campaigns = [
  { json: 'animal.welfare', slug: 'animals' },
  { json: 'educationeverywhere', slug: 'education' },
  { json: 'antiracism', slug: 'antiracism' },
  { json: 'lgbtq+', slug: 'lgbtq' },
  { json: 'effectivehealthcareeverywhere', slug: 'health' },
  { json: 'endingglobalpoverty', slug: 'poverty' },
  { json: 'tacklingclimatechange', slug: 'climate' },
  { json: 'a-brighter-future', slug: 'science' },
  { json: 'lilbub', slug: 'lilbub' },
  { json: 'afghanistan-humanitarian-aid', slug: 'afghanistan' },
  { json: 'gerc', slug: 'gerc' }
]

export const getCampaignSlugs = () => {
  return campaigns.map((campaign) => campaign.slug)
}

export const getCampaignInfo = (campaignSlug: string): CampaignInfo => {
  const campaign = campaigns.find((c) => c.slug === campaignSlug)

  if (!campaign) {
    throw new Error('Campaign not found')
  }

  const campaignJsonFile = path.join(
    process.cwd(),
    'src',
    'campaigns',
    `${campaign.json}.json`
  )

  const fileContents = fs.readFileSync(campaignJsonFile, 'utf8')

  return { ...JSON.parse(fileContents), slug: campaignSlug }
}
