import { DonationFrequency } from 'types/Frequency'

interface Obj {
  [key: string]: string | number | undefined | null
}

export const baseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  // Fallback
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

type EveryUrl = {
  slug: string
  everySlug?: string
  extras: Record<string, string>
  frequency?: DonationFrequency
  amount?: number
  crypto: boolean
}
export const createEveryUrl = ({
  slug,
  everySlug,
  frequency,
  amount,
  crypto,
  extras = {}
}: EveryUrl): string => {
  const production = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

  const url = new URL(
    everySlug + '/donate' + (crypto ? '/crypto' : ''),
    production ? 'https://www.every.org' : 'https://staging.every.org'
  )
  const commonQueryParams = {
    no_exit: 1,
    share_info: 1,
    utm_source: 'givelist',
    ...extras
  }

  url.search = crypto
    ? objectToParams(commonQueryParams)
    : objectToParams({
        frequency,
        amount,
        success_url: baseUrlWithPaths(slug, 'thank-you'),
        ...commonQueryParams
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

export const matchingMailto = (campaign: string) =>
  [
    'mailto:team@every.org',
    '?',
    'subject=',
    'I would like to donate matching dollars',
    '&',
    'body=',
    `Hello, I was looking at ${baseUrlWithPaths(
      campaign
    )} and was interested in matching`
  ].join('')
