import { DonationFrequency } from 'types/Frequency'
import { getShouldAddReturnUrlAbTest } from './return-url-ab-test'

interface Obj {
  [key: string]: string | number | undefined | null
}

export const baseUrl = () => {
  const base = process.env.NEXT_PUBLIC_VERCEL_URL

  const hasProtocol = base?.includes('http')

  return hasProtocol ? base : 'https://' + base
}

export const baseUrlWithPaths = (...paths: string[]) =>
  baseUrl() + '/' + paths.join('/')

export const objectToParams = (object: Obj): string => {
  const params = new URLSearchParams()

  Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .forEach(([key, value]) => params.set(key, value as string))

  return params.toString()
}

export const createEveryUrl = (
  slug: string,
  everySlug: string,
  frequency: DonationFrequency,
  amount: number,
  extras = {}
): string => {
  const production = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

  const url = new URL(
    everySlug + '/donate',
    production ? 'https://www.every.org' : 'https://staging.every.org'
  )

  const shouldAddReturnUrl = getShouldAddReturnUrlAbTest()
  const successUrl = shouldAddReturnUrl
    ? { success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug}/thank-you` }
    : {}

  url.search = objectToParams({
    frequency,
    amount,
    no_exit: 1,
    share_info: 1,
    success_url: baseUrlWithPaths(slug, 'thank-you'),
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
