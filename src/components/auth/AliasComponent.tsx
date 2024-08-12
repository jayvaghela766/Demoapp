import { useNavigation } from "@react-navigation/native"
import CustomButton from "components/comman/CustomButton"
import DropdownComponent from "components/comman/DropdownComponent"
import ErrorPopUp from "components/comman/ErrorPopUp"
import WrapperContainer from "components/comman/wrapperComponent/WrapperContainer"
import { RoutesConfig } from "navigation/routeConstant"
import React, { useState } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Avatar, IconButton, TextInput } from "react-native-paper"
import { Colors } from "theme/Color"
import { responsiveFontSize } from "theme/FontSize"
import { Images } from "theme/Images"
import { horizontalScale, verticalScale } from "theme/ResponsiveSize"
const AliasComponent = () => {
    const navigation = useNavigation();
    const [states, setState] = useState({
        email: '',
        userName: '',
        firstName: '',
        lastName: '',
        phoneNumber: null
    });


    const handleSaveContinue = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={Images.Inner} style={styles.leftArrow} />
                </Pressable>
                <Text style={styles.sign_textstyle}>Alias</Text>
            </View>
            <WrapperContainer>
                <View style={{ marginBottom: verticalScale(25) }}>
                    <Avatar.Icon size={100} icon="account-circle-outline" style={{ backgroundColor: Colors.grayTheme }} color="#999999" />
                    <IconButton icon="cloud-upload-outline" style={{ position: 'absolute', bottom: -10, right: -10 }} iconColor="#545454" />
                </View>
                <Text style={{ alignSelf: 'flex-start' }}>Alias</Text>
                <TextInput
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    textColor="#999999"
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    onChangeText={(text) => setState({ ...states, firstName: text })}
                    autoCapitalize="none"
                    returnKeyType="done"
                    placeholder=""
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="account-outline" color="#2C3135" />}
                />
                <Text style={{ alignSelf: 'flex-start' }}>Display Name</Text>
                <TextInput
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    textColor="#999999"
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    onChangeText={(text) => setState({ ...states, lastName: text })}
                    autoCapitalize="none"
                    returnKeyType="done"
                    placeholder=""
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="account-outline" color="#2C3135" />}
                />


            </WrapperContainer>
            <View style={{ paddingHorizontal: horizontalScale(20), paddingBottom: verticalScale(10) }}>
                <CustomButton
                    description="Save and continue"
                    containerStyle={{ backgroundColor: Colors.primary, }}
                    onPressButton={() => navigation.navigate(RoutesConfig.SET_UP_YOUR_PROFILE)}
                    imageStyle={{ height: 15, marginLeft: 10, width: 15 }}
                    icon={Images.SuffixIcon} />
                <CustomButton
                    description="Skip Alias creation for now"
                    containerStyle={{ backgroundColor: Colors.white, }}
                    textStyle={{color:Colors.primary}}
                    onPressButton={() => navigation.navigate(RoutesConfig.SET_UP_YOUR_PROFILE)}
                     />
                <Image source={Images.RukkorLogo} style={styles.imageContain} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    leftArrow: {
        height: 30,
        width: 30,
    },
    login_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(50),

    },
    imageContain: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    footer: { justifyContent: 'flex-end', paddingHorizontal: horizontalScale(30), marginBottom: horizontalScale(20), },
    sign_textstyle: {
        color: Colors.black,
        fontSize: 25,
        textAlign: 'center',
        flex: 1,
    },
    sign_description_textstyle: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
    wrapper: {},
    forgetPassword: { alignSelf: 'flex-end' },
    headerView: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }
})

export default AliasComponent;