import { Provider } from 'react-redux'

import { App } from '@/App'
import { store } from '@/services/store'
import { GlobalStyles } from '@/styles'
import { Theme } from '@/styles/Theme.styled'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
)
