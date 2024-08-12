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
const CareToShareComponent = () => {
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
                <Text style={styles.sign_textstyle}>Care to share?</Text>
            </View>
            <WrapperContainer>
                <Text style={{ paddingVertical: verticalScale(10) }}>Care to share some more about yourself? This information will be available in your Real ID profile. It will be shared with other users should you choose to show them your Real ID.</Text>
                <Text style={{ alignSelf: 'flex-start' }}>Where do you work?</Text>
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
                    placeholder="Stark Industries"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="fridge-industrial-outline" color="#2C3135" />}
                />
                <Text style={{ alignSelf: 'flex-start' }}>What’s your title/role?</Text>
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
                    placeholder="Chief Executive Officer"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="office-building" color="#2C3135" />}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={{ alignSelf: 'flex-start' }}>Year</Text>
                        <DropdownComponent label='Year' data={[{ label: '1', value: '1' }]} />
                    </View>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={{ alignSelf: 'flex-start' }}>Month</Text>
                        <DropdownComponent label='Month' data={[]} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ alignSelf: 'flex-start' }}>Day</Text>
                        <DropdownComponent label='Day' data={[]} />
                    </View>
                </View>

                <ErrorPopUp description="Entering this information is completely optional." />
            </WrapperContainer>
            <View style={{ paddingHorizontal: horizontalScale(20), paddingBottom: verticalScale(10) }}>
                <CustomButton
                    description="Save and continue"
                    containerStyle={{ backgroundColor: Colors.primary, }}
                    // onPressButton={() => navigation.navigate(RoutesConfig.SET_UP_YOUR_PROFILE)}
                    imageStyle={{ height: 15, marginLeft: 10, width: 15 }}
                    icon={Images.SuffixIcon} />
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

export default CareToShareComponent;