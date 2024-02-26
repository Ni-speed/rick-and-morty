import { App } from '@/App'
import { GlobalStyles } from '@/styles'
import { Theme } from '@/styles/Theme.styled'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={Theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
)
