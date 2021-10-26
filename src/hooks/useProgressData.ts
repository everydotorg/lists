import { Progress } from 'types/Progress'
import { useCampaignInfoContext } from './useCampaignInfoContext'

export const useProgressData = () => {
  const { fundingGoal, donated, givers } = useCampaignInfoContext()

  if (!fundingGoal || donated === undefined || givers === undefined) {
    return
  }

  const progress = {
    goal: fundingGoal,
    donated,
    givers
  } as Progress

  return progress
}
