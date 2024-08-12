import React, { useState } from 'react';
import { View, Text, TextInput, Platform, Image, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Colors } from 'theme/Color';
//import CountryPicker from 'react-native-country-picker-modal'

const CustomTextInput = (props: any, context: any) => {
  const {
    secureTextEntry = false,
    reference,
    value,
    label,
    onChangeText,
    error = '',
    maxLength,
    keyboardType = 'default',
    placeholder,
    requiresLabel,
    multiline,
    onSubmitEditing = () => { },
    editable = true,
    returnKeyType,
    inputStyle,
    boxStyle,
    containerStyle,
    fieldText,
    numberOfLines = 1,
    dropdownLabel,
    autoComplete,
    onFocus = () => { },
    onBlur = () => { },
    primaryIcon,
    secondaryIcon,
    toggleSecureEntry = false,
    type,
    onSelect = () => { },
    countryCode,
    change,
    handleModal,
    modalType,
    disable = false,
    countryLabel,
    country,
  } = props;
  const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry);
  const [showModal, setShowModal] = useState({
    show: false,
    type: 'personalInformation',
  });
  const { showPopUpModal = true } = props;
  const [number, onChangeNumber] = React.useState('');

  return (
    <TextInput
      {...props}
      style={[inputStyle, styles.input]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      placeholderTextColor={Colors.white}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 40,
    borderColor: 'white',
    borderWidth: 1,
    color: Colors.white,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 10
  }
})

CustomTextInput.contextTypes = {
  t: PropTypes.func,
};
export default CustomTextInput;
