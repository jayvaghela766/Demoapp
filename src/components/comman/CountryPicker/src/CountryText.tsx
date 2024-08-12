import React, { ReactNode } from 'react'
import { TextProps, Text } from 'react-native'
import { useTheme } from './CountryTheme'
import { Colors } from 'theme/Color';

export const CountryText = (props: TextProps & { children: ReactNode }) => {
  return (
    <Text
      {...props}
      style={{ fontSize: 14, color: Colors.black, marginHorizontal: 10 }}
    />
  )
}
