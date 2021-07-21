import path from 'path'
import fs from 'fs'
import { CampaignInfo } from 'types/CampaignInfo'

export const getCampaignInfo = (slug: string): CampaignInfo => {
  const campaignJsonFile = path.join(
    process.cwd(),
    'src',
    'campaings',
    `${slug}.json`
  )

  const fileContents = fs.readFileSync(campaignJsonFile, 'utf8')

  return JSON.parse(fileContents)
}
