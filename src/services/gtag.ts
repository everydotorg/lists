declare const window: Window & {
  dataLayer: Record<string, string>[]
}

const pushEvent = (event: string, params: Record<string, string | number>) => {
  const dataLayer = window.dataLayer || []

  dataLayer.push({ event, ...params })
}

export const gtag = {
  pushEvent
}
