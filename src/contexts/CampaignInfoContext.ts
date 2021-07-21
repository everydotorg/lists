import { createContext } from 'react'
import { CampaignInfo } from 'types/CampaignInfo'

export const CampaignInfoContext = createContext<CampaignInfo>(
  {} as CampaignInfo
)
