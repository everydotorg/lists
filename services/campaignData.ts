const EVERY_BASE_URL = 'https://partners.every.org/v0.2/nonprofit/'
// const EVERY_STAGING_BASE_URL =
//   'https://partners-staging.every.org/v0.2/nonprofit/'
type EveryResponse = {
  message: string
  data: {
    supporterCount: number
    fundMetadata: {
      donationChargesCount: number
      endorserNonprofitsCount: number
      allTimeRaised: {
        currency: string
        amount: string
      }
    }
  }
} & { [x: string]: unknown }

const getNonprofitInfo = async (slug: string): Promise<EveryResponse> => {
  // const production = process.env.REACT_APP_VERCEL_ENV === 'production'
  // const everyUrl = production ? EVERY_BASE_URL : EVERY_STAGING_BASE_URL

  // EVERY STAGING IS NOT RETRIEVING ANYTHING FOR THIS ENDPOINT. WE CHANGED TEMPORARILY TO TEST SOME CHANGES
  // BEFORE MOVING TO PRODUCTION. IT SHOULDNT BE A PROBLEM TO USE PRODUCTION ON THIS PARTICULAR ENDPOINT

  const everyUrl = EVERY_BASE_URL

  const response = await fetch(everyUrl + slug)

  const every = await response.json()

  return every
}

export const getProgressData = async (slug: string) => {
  const every = await getNonprofitInfo(slug)

  return {
    donated: parseFloat(every?.data?.fundMetadata?.allTimeRaised?.amount ?? 0),
    givers: every?.data?.fundMetadata?.donationChargesCount ?? 0
  }
}
