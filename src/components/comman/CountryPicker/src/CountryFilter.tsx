import React from 'react'
import { TextInput, StyleSheet, TextInputProps, Platform } from 'react-native'
import { useTheme } from './CountryTheme'
import { commonStyle } from 'theme/styles';

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '70%',
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },
})

//export type CountryFilterProps = TextInputProps
interface CountryFilterProps {
  lang?: string,
}

export const CountryFilter = (props: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor,
  } = useTheme()
  return (
    <TextInput
      testID='text-input-country-filter'
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      style={[
        styles.input,
        { fontFamily, fontSize, color: onBackgroundTextColor, textAlign: 'flex-end', }, commonStyle.textAlign(props.lang),
      ]}
      placeholder={props.lang == "en" ? 'Enter country name' : "أدخل اسم الدولة"}
      {...props}
    />
  )
}

CountryFilter.defaultProps = {
  autoFocus: false,
}
