import { LocalCampaignInfo } from 'types/CampaignInfo'
import { bubsworldPartial } from './bubsworldPartial'
import { demo } from './demo'
import { kimbramusic } from './kimbramusic'
import { reorder } from './reorder-nonprofits'

export const demoCampaigns: Record<string, LocalCampaignInfo> = {
  demo,
  bubsworldPartial,
  kimbramusic,
  reorder
}
