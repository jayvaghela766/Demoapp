import React, { useState, useEffect, ReactNode, memo } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextProps,
  Platform, Image
} from 'react-native'
import { CountryCode } from './types'
import { Flag } from './Flag'
import { useContext } from './CountryContext'
import { CountryText } from './CountryText'
import { useTheme } from './CountryTheme'
import { downArrow } from 'images';
import { commonStyle } from 'theme/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerWithEmoji: {
    // marginTop: Platform.OS == "android" ? HEIGHT * 0.055 : HEIGHT * 0.03,
  },
  containerWithoutEmoji: {
    marginTop: 0,
  },
  flagWithSomethingContainer: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
})

type FlagWithSomethingProp = Pick<
  FlagButtonProps,
  | 'countryCode'
  | 'withEmoji'
  | 'withCountryNameButton'
  | 'withCurrencyButton'
  | 'withCallingCodeButton'
  | 'withFlagButton'
  | 'placeholder'
> & { flagSize: number; allowFontScaling?: boolean; lang?: string }

const FlagText = (props: TextProps & { children: ReactNode }) => (
  <CountryText {...props} style={{ fontSize: 16 }} />
)


const FlagWithSomething = memo(
  ({
    allowFontScaling,
    countryCode,
    withEmoji,
    withCountryNameButton,
    withCurrencyButton,
    withCallingCodeButton,
    withFlagButton,
    flagSize,
    placeholder,
    lang
  }: FlagWithSomethingProp) => {
    const { translation, getCountryInfoAsync } = useContext()
    const [state, setState] = useState({
      countryName: '',
      currency: '',
      callingCode: '',
    })
    const { countryName, currency, callingCode } = state
    useEffect(() => {
      if (countryCode) {
        getCountryInfoAsync({ countryCode, translation })
          .then(setState)
          .catch(console.warn)
      }
    }, [
      countryCode,
      withCountryNameButton,
      withCurrencyButton,
      withCallingCodeButton,
    ])

    return (
      <View style={[styles.flagWithSomethingContainer, commonStyle.flexDirection(lang)]}>
        {countryCode ? (<>
          <View style={[lang == 'en' ? { marginRight: 10, marginTop: -10 } : { marginLeft: 10 }, { height: 25, width: 25, borderRadius: 2 / 2, alignItems: "center", justifyContent: 'center', overflow: "hidden" }]} >
            <Flag
              {...{ withEmoji, countryCode, withFlagButton, flagSize: flagSize!, }}
            />
          </View>
          {/* <Image source={downArrow} style={{ resizeMode: 'contain' }} /> */}
        </>
        ) : (
          <FlagText allowFontScaling={allowFontScaling}>{countryCode}</FlagText>
        )}

        {/* {withCountryNameButton && countryName ? (
          <FlagText allowFontScaling={allowFontScaling}>
            {countryName + ' '}
          </FlagText>
        ) : null} */}
        {/* {withCurrencyButton && currency ? (
          <FlagText
            allowFontScaling={allowFontScaling}
          >{`(${currency}) `}</FlagText>
        ) : null} */}
        {/* {callingCode ? (
          <FlagText
            allowFontScaling={allowFontScaling}
          >{`+${callingCode}`}</FlagText>
        ) : null} */}

      </View>
    )
  },
)

export interface FlagButtonProps {
  allowFontScaling?: boolean
  withEmoji?: boolean
  withCountryNameButton?: boolean
  withCurrencyButton?: boolean
  withCallingCodeButton?: boolean
  withFlagButton?: boolean
  containerButtonStyle?: StyleProp<ViewStyle>
  countryCode?: CountryCode
  placeholder: string
  onOpen?(): void
  lang?: string
}

export const FlagButton = ({
  allowFontScaling,
  withEmoji,
  withCountryNameButton,
  withCallingCodeButton,
  withCurrencyButton,
  withFlagButton,
  countryCode,
  containerButtonStyle,
  onOpen,
  placeholder,
  lang

}: FlagButtonProps) => {
  const { flagSizeButton: flagSize } = useTheme()

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onOpen}>
      <View
        style={[
          styles.container,
          withEmoji ? styles.containerWithEmoji : styles.containerWithoutEmoji,
          containerButtonStyle,
        ]}
      >
        <FlagWithSomething
          {...{
            allowFontScaling,
            countryCode,
            withEmoji,
            withCountryNameButton,
            withCallingCodeButton,
            withCurrencyButton,
            withFlagButton,
            flagSize: flagSize!,
            placeholder,
            lang
          }}
        />
      </View>
    </TouchableOpacity>
  )
}

FlagButton.defaultProps = {
  withEmoji: true,
  withCountryNameButton: false,
  withCallingCodeButton: false,
  withCurrencyButton: false,
  withFlagButton: true,
}
