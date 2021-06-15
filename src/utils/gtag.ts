declare const window: Window & {
  dataLayer: Record<string, string>[]
}

export const pushEvent = (event: string, params: Record<string, string>) => {
  const dataLayer = window.dataLayer || []

  dataLayer.push({ event, ...params })
}
