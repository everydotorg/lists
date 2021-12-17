import { CampaignInfo } from 'types/CampaignInfo'
import { NonProfit } from 'types/NonProfit'

const EVERY_API = 'https://partners.every.org/v0.2'

interface EdoNonprofit {
  primarySlug: string
  name: string
  locationAddress: string
  description: string
  logoCloudinaryId: string
}

export const getListData = async (slug: string): Promise<CampaignInfo> => {
  const everyListData = await fetch(
    `${EVERY_API}/nonprofit/${slug}?apiKey=list`
  ).then((res) => res.json())

  // lilbub has type = 'FUND', make an exception
  if (everyListData?.data?.nonprofit?.type !== 'LIST' && slug !== 'lilbub')
    throw new Error('Not Found')

  const { nonprofit, endorsedNonprofits, fundMetadata } = everyListData.data

  return {
    slug,
    everySlug: slug,
    fundingGoal: 0,
    primaryColor: '#00A37F',
    name: nonprofit.name,
    mobileBannerUrl: nonprofit.coverImageCloudinaryId,
    imageUrl: nonprofit.coverImageCloudinaryId,
    bannerUrl: nonprofit.coverImageCloudinaryId,
    socialShareText: nonprofit.description,
    previewImage: nonprofit.coverImageCloudinaryId,
    about: nonprofit.descriptionLong || nonprofit.description,
    cause: nonprofit.causeCategory,
    donated: parseFloat(fundMetadata?.allTimeRaised?.amount ?? 0),
    givers: fundMetadata?.donationChargesCount ?? 0,
    nonprofits: endorsedNonprofits.map(
      ({
        primarySlug,
        name,
        locationAddress,
        description,
        logoCloudinaryId
      }: EdoNonprofit) => ({
        slug: primarySlug,
        name,
        location: locationAddress,
        about: description,
        img: logoCloudinaryId
      })
    )
  }
}

export const getNonprofitData = async (slug: string): Promise<NonProfit> => {
  const everyListData = await fetch(
    `${EVERY_API}/nonprofit/${slug}?apiKey=list`
  ).then((res) => res.json())

  if (everyListData?.data?.nonprofit?.type !== 'NONPROFIT')
    throw new Error('Not Found')

  const { nonprofit } = everyListData.data

  return {
    slug: nonprofit.primarySlug,
    name: nonprofit.name,
    location: nonprofit.locationAddress,
    about: nonprofit.description,
    img: nonprofit.logoCloudinaryId
  }
}
