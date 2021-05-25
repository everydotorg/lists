import { CampaignInfo } from '../types/CampaignInfo'

export const getCampaignInfo = async (slug: string): Promise<CampaignInfo> => {
  try {
    const campaignInfoResponse = await fetch(`assets/${slug}.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    const campaignInfo: CampaignInfo = await campaignInfoResponse.json()

    return campaignInfo
  } catch (e) {
    console.log(e)
    throw e
  }
}
