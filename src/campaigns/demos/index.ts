import { LocalCampaignInfo } from 'types/CampaignInfo'
import { bubsworldPartial } from './bubsworldPartial'
import { demo } from './demo'
import { reorder } from './reorder-nonprofits'

export const demoCampaigns: Record<string, LocalCampaignInfo> = {
  demo,
  bubsworldPartial,
  reorder
}
