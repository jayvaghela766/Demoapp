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

const ForgetComponent = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <WrapperContainer backgroundImage={Images.authBackground} label={'Forgot password'} description="Enter your email address below and we'll send you a link to set up a new password.">
                <CustomTextInput
                    placeholder="Enter Email"
                    inputStyle={{ marginVertical: 10, marginTop: 30 }} />
                <CustomButton description="Reset Password" containerStyle={{ backgroundColor: Colors.buttonColor }} onPressButton={() => navigation.navigate(RoutesConfig.RESET_PASSWORD)} />
                <View style={{ alignSelf: 'center', flexDirection: 'row', marginBottom: verticalScale(150) }}>
                    <Text style={{ color: Colors.white, textAlign: 'center', fontWeight: 'bold' }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(RoutesConfig.LOGIN)}>
                        <View><Text style={{ color: '#3A64D6', textAlign: 'center', fontWeight: 'bold' }}>Sign In</Text></View>
                    </TouchableOpacity>
                </View>
            </WrapperContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    wrapper: {},
})

export default ForgetComponent;