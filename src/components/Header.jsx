import React, { useContext } from 'react'
import { View, ActionButton, Flex } from '@adobe/react-spectrum'

import Moon from '@spectrum-icons/workflow/Moon'
import Light from '@spectrum-icons/workflow/Light'
import { ThemeContext, ColorScheme } from '../store/ThemeContext'

export default function Header () {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <View UNSAFE_className="header" borderBottomWidth="thin" borderBottomColor="gray-300" backgroundColor="gray-75" gridArea="header" paddingX="size-200">
      <Flex height="100%" justifyContent="end" alignItems="center">
        <ActionButton
          onPress={() => setTheme(
            theme === ColorScheme.DARK
              ? ColorScheme.LIGHT
              : ColorScheme.DARK
          )}
          aria-label={theme === ColorScheme.DARK ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === ColorScheme.DARK ? <Light size="S" /> : <Moon size="S" />}
        </ActionButton>
      </Flex>
    </View>
  )
}
