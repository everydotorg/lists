import 'src/styles/global.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="about-modal" />
      <Component {...pageProps} />
    </>
  )
}

export default App
