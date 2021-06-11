import { DonationFrequency } from '../types/Frequency'

interface Obj {
  [key: string]: string | number | undefined | null
}

export const objectToParams = (object: Obj): string => {
  const params = new URLSearchParams()

  Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .forEach(([key, value]) => params.set(key, value as string))

  return params.toString()
}

export const createEveryUrl = (
  slug: string,
  frequency: DonationFrequency,
  amount: number,
  extras = {}
): string => {
  const production = process.env.VERCEL_ENV === 'production'

  const url = new URL(
    (production ? slug : 'owid') + '/donate',
    production ? 'https://www.every.org' : 'https://staging.every.org'
  )

  url.search = objectToParams({
    frequency,
    amount,
    no_share: 1,
    no_exit: 1,
    share_info: 0,
    success_url: window.location.origin.concat(`/${slug}/thank-you`),
    ...extras
  })

  return url.href
}

export const facebookShare = (u: string, quote: string): string => {
  const url = new URL('', 'https://www.facebook.com/sharer/sharer.php')

  url.search = objectToParams({
    u,
    quote
  })

  return url.href
}

export const twitterShare = (u: string, text: string): string => {
  const url = new URL('', 'https://twitter.com/share')

  url.search = objectToParams({
    url: u,
    text
  })

  return url.href
}
