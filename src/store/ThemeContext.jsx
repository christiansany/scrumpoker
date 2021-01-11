import React, { useState, useEffect } from 'react'

export const ColorScheme = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const ThemeContext = React.createContext(null)

export function ThemeContextProvider ({ children }) {
  const [theme, setTheme] = useState((() => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('ThemeContext.Theme')

      if (storedTheme && Object.values(ColorScheme).includes(storedTheme)) {
        return storedTheme
      }
    }

    // Retrun dark mode as default
    return ColorScheme.DARK
  })())

  // Theme change
  useEffect(() => {
    window.localStorage.setItem('ThemeContext.Theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}
