import React from 'react'
import { render } from 'react-dom'

import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle';

import Screen from './screen'

const App = () => {
    return (
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
          <Screen />
          <GlobalStyle/>
        </ThemeProvider>
      </RecoilRoot>
    )
  }
  
render(<App />, document.getElementById('root'))