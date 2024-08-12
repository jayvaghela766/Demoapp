import React from "react"
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native"
import { Images } from "theme/Images";
import WrapperContainer from "./wrapperComponent/WrapperContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { responsiveFontSize } from "theme/FontSize";
import { Colors } from "theme/Color";
import { horizontalScale, verticalScale } from "theme/ResponsiveSize";
import CustomButton from "./CustomButton";
import { RoutesConfig } from "navigation/routeConstant";

const SuccessComponent = (props: any) => {
    const route = useRoute();
    const { label, description, subDescription, buttonLabel }: any = route?.params
    const navigation = useNavigation()
    return (
        <ImageBackground source={Images.completeBackground} style={[Styles.container]} resizeMode="stretch" resizeMethod="resize">
            <View style={Styles.login_container}>
                <Text style={Styles.sign_textstyle}>{label}</Text>
                <Text style={Styles.description}>{description}</Text>
                {subDescription && <Text style={Styles.subDescription}>{subDescription}</Text>}
                <CustomButton
                    description={buttonLabel}
                    onPressButton={() => navigation.goBack()}
                    containerStyle={{ backgroundColor: Colors.bluecolor, }}
                    textStyle={{ fontWeight: '600', color: Colors.white }} />
                <View style={{ flexDirection: 'row', marginVertical: verticalScale(50), }}>
                    <Image source={Images.tiktokIcon} style={Styles.icon} resizeMode="contain" />
                    <Image source={Images.twitterIcon} style={Styles.icon} resizeMode="contain" />
                    <Image source={Images.instagramIcon} style={Styles.icon} resizeMode="contain" />
                    <Image source={Images.facebookIcon} style={Styles.icon} resizeMode="contain" />
                </View>
            </View>
        </ImageBackground>


    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:
    },
    icon: {
        height: 30,
        width: 30, marginHorizontal: 10
    },
    description: {
        color: Colors.white,
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center',
        paddingHorizontal: horizontalScale(40),
        fontWeight: 'bold'
    },
    subDescription: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
        paddingHorizontal: horizontalScale(40),
        marginVertical: 10
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
export default SuccessComponent;