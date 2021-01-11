import React, { useContext } from 'react'
import { SSRProvider } from '@react-aria/ssr'
import { Provider, defaultTheme } from '@adobe/react-spectrum'
import { ThemeContext } from '../store/ThemeContext'

export default function Spectrum ({ children }) {
  const { theme } = useContext(ThemeContext)

  return (
    <SSRProvider>
      <Provider theme={defaultTheme} colorScheme={theme} UNSAFE_style={{ height: '100%' }}>
        { children }
      </Provider>
    </SSRProvider>
  )
}
