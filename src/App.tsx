import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Givelist</h1>
    </ThemeProvider>
  )
}

export default App
