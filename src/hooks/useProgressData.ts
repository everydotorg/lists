import { useState, useEffect } from 'react'
import { getProgressData } from 'src/services/campaignData'
import { Progress } from 'types/Progress'
import { useCampaignInfoContext } from './useCampaignInfoContext'

export const useProgressData = () => {
  const { everySlug, fundingGoal } = useCampaignInfoContext()
  const [progress, setProgress] = useState<Progress | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProgressData(everySlug)
      setProgress({
        goal: fundingGoal,
        ...data
      })
    }

    // slug and fundingGoal will be undefined till the .json request is fullfilled
    if (everySlug && fundingGoal) {
      fetchData()
    }
  }, [everySlug, fundingGoal])

  return progress
}
