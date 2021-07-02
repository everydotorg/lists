import { useContext } from 'react'
import { CampaignInfoContext } from '../contexts/CampaignInfoContext'
import { CampaignInfo } from '../types/CampaignInfo'

export const useCampaignInfoContext = (): CampaignInfo => {
  return useContext(CampaignInfoContext)
}
