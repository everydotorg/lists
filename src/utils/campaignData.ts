const EVERY_BASE_URL = 'https://partners.every.org/v0.2/nonprofit/'

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
  const response = await fetch(EVERY_BASE_URL + slug)

  const every = await response.json()

  return every
}

export const getProgressData = async (slug: string) => {
  const every = await getNonprofitInfo(slug)

  return {
    donated: parseFloat(every.data.fundMetadata.allTimeRaised.amount),
    givers: every.data.supporterCount
  }
}
