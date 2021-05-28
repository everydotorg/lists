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
