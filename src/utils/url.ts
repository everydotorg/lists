import { DonationFrequency } from '../types/Frequency'

const objectToParams = (object: {
  [key: string]: string | number | undefined | null
}): string => {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )

  return params.length > 0 ? `?${params.join('&')}` : ''
}

export const createEveryUrl = (
  slug: string,
  frequency: DonationFrequency,
  amount: number,
  extras = {}
): string => {
  const base = [
    process.env.NODE_ENV === 'production'
      ? 'https://www.every.org'
      : 'https://staging.every.org',
    process.env.NODE_ENV === 'production' ? slug : 'owid',
    'donate'
  ].join('/')

  return base.concat(
    objectToParams({
      frequency,
      amount,
      no_share: 1,
      no_exit: 1,
      share_info: 0,
      redirect_url: window.location.origin.concat(`/${slug}/thank-you`),
      ...extras
    })
  )
}

export const facebookShare = (u: string, quote: string): string => {
  return 'https://www.facebook.com/sharer/sharer.php'.concat(
    objectToParams({
      u,
      quote
    })
  )
}

export const twitterShare = (url: string, text: string): string => {
  return 'https://twitter.com/share'.concat(
    objectToParams({
      url,
      text
    })
  )
}
