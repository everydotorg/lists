import '../styles/global.css'
import type { AppProps } from 'next/app'
import { CampaignLayout } from 'modules/shared/CampaignLayout'

function App({ Component, pageProps, router }: AppProps) {
  // There might be a better way to do this...
  // https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
  if (router.route.includes('/[campaign]')) {
    return (
      <CampaignLayout>
        <Component {...pageProps} />
      </CampaignLayout>
    )
  }

  return <Component {...pageProps} />
}

export default App
