
import { View, SafeAreaView, StatusBar, Pressable, Image, Text, Platform, Animated, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Colors } from 'theme/Color';
import { commonStyle } from 'theme/styles';



const WIDTH = Dimensions.get('screen').width;


const CustomButton = (props: any) => {
    const { isReminder, imageStyle,icon, customeBorderRadius = 10, description, containerStyle, active = false, onPressButton = () => { }, onPressIcon = () => { }, iconStyle, style, event_background = false, textStyle } = props

    const buttonColor = {
        backgroundColor: active ? `${Colors.background}30` : "transparent",
        color: Colors.white,
        tintColor: active ? Colors.background : Colors.textColorFour
    }

    return (
        <TouchableOpacity style={[{ ...containerStyle }, styles?.button_contain, { borderRadius: customeBorderRadius }]} onPress={onPressButton}>
            <View style={[{ height: 40,flexDirection:'row', alignItems: 'center', justifyContent: 'center', ...style }]} >
                <Text numberOfLines={1} style={[{ color: buttonColor.color, fontSize: 15, ...textStyle }]}>{description}</Text>
                {icon && <Image source={icon} style={imageStyle} resizeMode="contain" />}
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    button_contain: {
        marginVertical: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    }
})
CustomButton.contextTypes = {
    t: PropTypes.func
}
export default CustomButton