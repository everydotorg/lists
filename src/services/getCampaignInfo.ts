import path from 'path'
import fs from 'fs'
import { CampaignInfo } from 'types/CampaignInfo'

const campaigns = [
  { json: 'animal.welfare', slug: 'animal' },
  { json: 'educationeverywhere', slug: 'education' },
  { json: 'antiracism', slug: 'racism' },
  { json: 'lgbtq+', slug: 'lgbtq' },
  { json: 'effectivehealthcareeverywhere', slug: 'health' },
  { json: 'endingglobalpoverty', slug: 'poverty' },
  { json: 'tacklingclimatechange', slug: 'climate' },
  { json: 'a-brighter-future', slug: 'science' },
  { json: 'lilbub', slug: 'lilbub' }
]

export const getCampaignSlugs = () => {
  return campaigns.map((campaign) => campaign.slug)
}

export const getCampaignInfo = (campaignSlug: string): CampaignInfo => {
  const campaign =
    campaigns.find((c) => c.slug === campaignSlug) || campaigns[0]

  const campaignJsonFile = path.join(
    process.cwd(),
    'src',
    'campaigns',
    `${campaign.json}.json`
  )

  const fileContents = fs.readFileSync(campaignJsonFile, 'utf8')

  return { ...JSON.parse(fileContents), slug: campaignSlug }
}
