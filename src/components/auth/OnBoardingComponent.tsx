import { useNavigation } from "@react-navigation/native"
import CustomButton from "components/comman/CustomButton"
import CustomTextInput from "components/comman/CustomTextInput"
import WrapperContainer from "components/comman/wrapperComponent/WrapperContainer"
import { RoutesConfig } from "navigation/routeConstant"
import React from "react"
import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Swiper from "react-native-swiper"
import { Colors } from "theme/Color"
import { responsiveFontSize } from "theme/FontSize"
import { Images } from "theme/Images"
import { horizontalScale, verticalScale } from "theme/ResponsiveSize"

const OnBoardingComponent = () => {
    const navigation = useNavigation();

    let Sign_slider_List = [{
        label: 'Global markets at your fingertips',
        description: 'Let us put our expertise in finance   services to work for you today'
    }, {
        label: 'Professional Finance Service',
        description: 'High-net-worth individuals, entrepreneurs and wealthy families can enjoy'
    }, {
        label: 'In Control but not alone, Do it Yourself',
        description: 'Investing is a skill, It requires discipline and composure in times of market stress'
    }]

    return (
        <View style={styles.container}>
            <Swiper showsButtons={false} removeClippedSubviews={false} dotStyle={{ backgroundColor: Colors.white }} activeDotColor={Colors.buttonColor}>
                {Sign_slider_List?.map((item,index) => {
                    return (
                        <WrapperContainer label={item.label} description={item.description} key={index}>
                            <CustomButton
                                description="Log In"
                                onPressButton={() => navigation.navigate(RoutesConfig.LOGIN)}
                                containerStyle={{ backgroundColor: Colors.buttonColor }}
                                textStyle={{ fontWeight: '600' }} />
                            <CustomButton
                                description="Register"
                                onPressButton={() => navigation.navigate(RoutesConfig.REGISTER)}
                                containerStyle={{ backgroundColor: Colors.white, marginBottom: 150 }}
                                textStyle={{ color: Colors.black, fontWeight: '600' }} />
                        </WrapperContainer>
                    )
                })}
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingBottom:10
    },
    login_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(50),
    },
    sign_textstyle: {
        color: Colors.lightGreen,
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: verticalScale(10)
    },
    sign_description_textstyle: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
    imageContain: {
        height: 50,
        alignSelf: 'center',
        marginBottom: verticalScale(10)
    },
})

export default OnBoardingComponent;