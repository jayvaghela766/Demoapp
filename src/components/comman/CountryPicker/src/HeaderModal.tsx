import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle
} from 'react-native'
// import { commonStyle } from '../../../constants/styles'
import CloseButton from './CloseButton'
import { commonStyle } from 'theme/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

interface HeaderModalProps {
  withFilter?: boolean
  withCloseButton?: boolean
  lang?: string,
  closeButtonImage?: ImageSourcePropType
  closeButtonStyle?: StyleProp<ViewStyle>
  closeButtonImageStyle?: StyleProp<ImageStyle>
  onClose(): void
  renderFilter(props: HeaderModalProps): ReactNode
}
export const HeaderModal = (props: HeaderModalProps) => {
  const {
    withFilter,
    withCloseButton,
    closeButtonImage,
    closeButtonStyle,
    closeButtonImageStyle,
    onClose,
    lang,
    renderFilter
  } = props
  return (
    <View style={[styles.container, commonStyle.flexDirection(lang)]}>
      {withCloseButton && <CloseButton
        image={closeButtonImage}
        style={closeButtonStyle}
        imageStyle={closeButtonImageStyle}
        onPress={onClose}
      />}
      {withFilter && renderFilter(props)}
    </View>
  )
}

HeaderModal.defaultProps = {
  withCloseButton: true
}
