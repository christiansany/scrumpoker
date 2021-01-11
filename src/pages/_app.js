import React from 'react'
import { Grid, View } from '@adobe/react-spectrum'
import 'normalize-css'
import '../styles/globals.css'

import { ThemeContextProvider } from '../store/ThemeContext'

import Header from '../components/Header'
import SpectrumProvider from '../components/SpectrumProvider'

function App ({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <SpectrumProvider>
        <Grid
          areas={['header', 'main', 'footer']}
          columns={['1fr']}
          rows={['size-700', '1fr']}
          height="100%"
          gap="size-0"
        >
          <Header />
          <View backgroundColor="gray-50" gridArea="main">
            <Component {...pageProps} />
          </View>
        </Grid>
      </SpectrumProvider>
    </ThemeContextProvider>
  )
}

export default App
