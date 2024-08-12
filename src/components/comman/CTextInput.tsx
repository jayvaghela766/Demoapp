import React, { useState } from 'react';
import { View, Text, TextInput, Platform, Image, Pressable, Dimensions } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
//import CountryPicker from 'react-native-country-picker-modal'


// import { WIDTH, HEIGHT } from '../constants/dimensions';
import { eyeIcon, eyeIconClose, dropDownArrow } from 'theme/Images';
// import PopUpModal from '../components/PopUpModal';
import { CountryPicker } from './CountryPicker/src/CountryPicker';
import { Colors } from 'theme/Color';
import { commonStyle } from 'theme/styles';

const { WIDTH, HEIGHT } = Dimensions.get('screen');

const CTextInput = (props, context) => {
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
    const lang = 'en';
    const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry);
    const [showModal, setShowModal] = useState({
        show: false,
        type: 'personalInformation',
    });
    const { showPopUpModal = true } = props;

    const inputHeight = multiline ? HEIGHT * 0.15 : HEIGHT * 0.05;

    return (
        <View style={{ ...containerStyle }}>
            {(label || requiresLabel) && (
                <View
                    style={[
                        commonStyle.flexDirection(lang),
                        { marginBottom: HEIGHT * 0.012 },
                    ]}>
                    {label ? (
                        <Text
                            style={[
                                commonStyle.fontRegular(lang),
                                commonStyle.textAlign(lang),
                                { fontSize: 15, color: Colors.lightgrey },
                            ]}>
                            {label}
                        </Text>
                    ) : (
                        <View />
                    )}
                    {requiresLabel ? (
                        <Text
                            style={[
                                commonStyle.fontMedium(lang),
                                commonStyle.textAlign(lang),
                                {
                                    fontSize: 15,
                                    color: Colors.lightgrey,
                                    marginHorizontal: WIDTH * 0.01,

                                },
                            ]}>
                            {requiresLabel}
                            <Text
                                style={[
                                    commonStyle.textAlign(lang),
                                    commonStyle.fontRegular(lang),

                                    { color: Colors.red, fontSize: 15, width: WIDTH - 10, },
                                ]}>
                                {'*'}
                            </Text>
                        </Text>
                    ) : (
                        <View />
                    )}
                </View>
            )}
            <View style={[commonStyle.flexDirection(lang), {}]}>
                {type == 'phoneNumber' && (
                    <View
                        style={[
                            commonStyle.flexDirection(lang),
                            lang == 'en'
                                ? { marginRight: WIDTH * 0.03 }
                                : { marginRight: WIDTH * 0.03 },
                            {
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.borderColor,
                                borderRadius: HEIGHT * 0.01,
                                paddingHorizontal: WIDTH * 0.04,
                                backgroundColor: Colors.white,
                                height: HEIGHT * 0.055,
                            },
                        ]}>
                        <View
                            style={[
                                commonStyle.flexDirection(lang),
                                { alignItems: 'center', justifyContent: 'center' },
                            ]}>
                            <View
                                style={{
                                    width: WIDTH * 0.19 /* WIDTH * 0.0616, 0.0187 */,
                                    height: HEIGHT * 0.0189,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <CountryPicker
                                    {...{
                                        countryCode: countryCode.cca2 || countryLabel || 'US',
                                        withFilter: 1,
                                        withFlag: true,
                                        withAlphaFilter: false,
                                        withEmoji: false,
                                        onSelect: onSelect,
                                        lang,
                                        containerButtonStyle: {
                                            position: 'absolute',
                                            top: -1,
                                            bottom: 0,
                                            left:
                                                Platform.OS == 'ios' ? -WIDTH * 0.12 : -WIDTH * 0.11,
                                            right: 20,
                                        },
                                    }}
                                    renderFlagButton={props => {
                                        return (
                                            <Pressable
                                                onPress={() => props.onOpen()}
                                                style={[
                                                    commonStyle.flexDirection(lang),
                                                    {
                                                        width: WIDTH * 0.2,
                                                        height: '100%',
                                                        paddingHorizontal: WIDTH * 0.0,
                                                        alignItems: 'center',
                                                    },
                                                ]}>
                                                <View
                                                    style={[
                                                        commonStyle.flexDirection(lang),
                                                        {
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            width: WIDTH * 0.28,
                                                            height: 30,
                                                        },
                                                    ]}>
                                                    <Image
                                                        source={dropDownArrow}
                                                        style={{ resizeMode: 'contain' }}
                                                    />
                                                    <Text
                                                        style={[
                                                            commonStyle.textAlign(lang),
                                                            commonStyle.fontRegular(lang),
                                                            {
                                                                fontSize: 17,
                                                                color: Colors.textColor,
                                                                alignSelf: 'center',
                                                                marginLeft: WIDTH * 0.02,
                                                            },
                                                        ]}>{`+${countryCode?.callingCode?.toString() ||
                                                            country ||
                                                            '1'
                                                            }`}</Text>
                                                </View>
                                            </Pressable>
                                        );
                                    }}
                                />
                            </View>

                            {/* <View style={[commonStyle.flexDirection(lang), { alignItems: "center", justifyContent: "center", marginLeft: WIDTH * 0.02 }]}>
                        <Image source={dropDownArrow} style={{ resizeMode: 'contain' }} />
                        <Text style={[commonStyle.textAlign(lang), commonStyle.fontRegular(lang), { fontSize: 17, color: Colors.textColor, alignSelf: 'center', marginLeft: WIDTH * 0.02 }]}>{`+${countryCode?.callingCode?.toString() || country || "1"}`}</Text>
                    </View> */}
                        </View>
                        {disable && (
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                }}
                            />
                        )}
                    </View>
                )}

                <View
                    style={[
                        commonStyle.flexDirection(lang),
                        {
                            minHeight: inputHeight,
                            borderRadius: HEIGHT * 0.01,
                            paddingHorizontal: WIDTH * 0.04,
                            backgroundColor: Colors.white,
                            borderWidth: 1,
                            borderColor: Colors.borderColor,
                            ...boxStyle,
                            flex: 1,
                            alignItems: 'center',
                        },
                    ]}>
                    {!value && dropdownLabel && (
                        <Text
                            style={[
                                commonStyle.fontRegular(lang),
                                commonStyle.textAlign(lang),
                                {
                                    alignSelf: 'center',
                                    fontSize: 17,
                                    color: `${Colors.lightgrey}40`,
                                },
                            ]}>
                            {dropdownLabel}
                        </Text>
                    )}

                    {fieldText && (
                        <Text
                            style={[
                                commonStyle.fontRegular(lang),
                                commonStyle.textAlign(lang),
                                lang == 'en'
                                    ? { marginRight: WIDTH * 0.02 }
                                    : { marginLeft: WIDTH * 0.02 },
                                { fontSize: 17, color: Colors.textColor, alignSelf: 'center' },
                            ]}>
                            {fieldText}
                        </Text>
                    )}
                    {primaryIcon && (
                        <Image
                            source={primaryIcon}
                            resizeMode="contain"
                            style={[
                                lang == 'en'
                                    ? { marginRight: WIDTH * 0.025 }
                                    : { marginLeft: WIDTH * 0.025 },
                                { alignSelf: 'center' },
                            ]}
                        />
                    )}

                    <TextInput
                        ref={reference}
                        placeholder={placeholder}
                        style={[
                            commonStyle.textAlign(lang),
                            commonStyle.fontRegular(lang),
                            {
                                color: Colors.textColor,
                                fontSize: 17,
                                flex: 1,
                                paddingVertical: multiline ? HEIGHT * 0.01 : 0,
                                borderWidth: 0,
                                height: inputHeight,
                                ...inputStyle,
                            },
                        ]}
                        numberOfLines={numberOfLines}
                        value={value}
                        editable={editable}
                        placeholderTextColor={`${Colors.textColor}60`}
                        onChangeText={onChangeText}
                        maxLength={maxLength}
                        keyboardType={keyboardType}
                        multiline={multiline}
                        secureTextEntry={isSecureEntry}
                        onSubmitEditing={onSubmitEditing}
                        returnKeyType={returnKeyType}
                        autoComplete={autoComplete}
                        blurOnSubmit={false}
                        autoFocus={false}
                        autoCapitalize="none"
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />

                    {secondaryIcon && (
                        <Image
                            source={secondaryIcon}
                            resizeMode="contain"
                            style={{ alignSelf: 'center' }}
                        />
                    )}
                    {toggleSecureEntry && (
                        <Pressable
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                            onPressOut={() => {
                                setIsSecureEntry(prev => !prev);
                            }}>
                            <Image
                                source={isSecureEntry ? eyeIconClose : eyeIcon}
                                style={{ alignSelf: 'center' }}
                                resizeMode="contain"
                            />
                        </Pressable>
                    )}
                    {change && (
                        <Pressable
                            onPressOut={() => handleModal(true, modalType)}
                            style={{
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: WIDTH * 0.18,
                                borderRadius: WIDTH * 0.04,
                                backgroundColor: Colors.textColor,
                                height: HEIGHT * 0.033,
                            }}>
                            <Text
                                style={[
                                    commonStyle.fontBold(lang),
                                    { fontSize: 15, color: Colors.white },
                                ]}>
                                {change}
                            </Text>
                        </Pressable>
                    )}
                </View>
            </View>
            {maxLength && (
                <View
                    style={[
                        lang == 'en' ? { right: WIDTH * 0.03 } : { left: WIDTH * 0.03 },
                        {
                            borderRadius: WIDTH * 0.1,
                            position: 'absolute',
                            bottom: WIDTH * 0.03,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: `${Colors.textColorFour}15`,
                            minWidth: WIDTH * 0.15,
                        },
                    ]}>
                    <Text
                        style={[
                            commonStyle.fontMedium(lang),
                            {
                                marginHorizontal: WIDTH * 0.015,
                                color: Colors.textColorFour,
                                fontSize: 15,
                                marginVertical: WIDTH * 0.005,
                            },
                        ]}>{`${value?.length || 0}/${maxLength}`}</Text>
                </View>
            )}
            <View
                style={[
                    lang == 'en' ? { left: 0 } : { right: 0 },
                    {
                        position: 'absolute',
                        // bottom:
                        //     Platform.OS == 'ios'
                        //         ? (error == context.t('user_name_invalid_reg')) ? -HEIGHT * 0.033 : -HEIGHT * 0.018
                        //         : error == context.t('user_name_invalid_reg')
                        //             ? -HEIGHT * 0.035
                        //             : -HEIGHT * 0.02,
                    },
                    {

                    },
                ]}>
                {!isEmpty(error) && (
                    <Text
                        style={[
                            commonStyle.textAlign(lang),
                            commonStyle.fontRegular(lang),

                            { color: Colors.background, fontSize: 12, width: WIDTH - 10, },
                        ]}>
                        {error || ''}
                    </Text>
                )}
            </View>

        </View>
    );
};
CTextInput.contextTypes = {
    t: PropTypes.func,
};
export default CTextInput;
