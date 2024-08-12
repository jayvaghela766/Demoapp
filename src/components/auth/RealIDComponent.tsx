import { useNavigation } from "@react-navigation/native"
import CTextInput from "components/comman/CTextInput"
import CustomButton from "components/comman/CustomButton"
import WrapperContainer from "components/comman/wrapperComponent/WrapperContainer"
import { RoutesConfig } from "navigation/routeConstant"
import React, { useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { Avatar, IconButton, TextInput } from "react-native-paper"
import { Colors } from "theme/Color"
import { responsiveFontSize } from "theme/FontSize"
import { Images } from "theme/Images"
import { horizontalScale, verticalScale } from "theme/ResponsiveSize"
const RealIDComponent = () => {
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
            <WrapperContainer>
                <Text style={styles.sign_textstyle}>Real ID</Text>
                <View>
                    <Avatar.Icon size={100} icon="account-circle-outline" style={{ backgroundColor: Colors.grayTheme }} color="#999999" />
                    <IconButton icon="cloud-upload-outline" style={{ position: 'absolute', bottom: -10, right: -10 }} iconColor="#545454" />
                </View>
                <Text style={{ alignSelf: 'flex-start' }}>Email</Text>
                <TextInput
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    textColor="#999999"
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    autoCapitalize="none"
                    onChangeText={(text) => setState({ ...states, email: text })}
                    returnKeyType="done"
                    placeholder="Enter your e-mail"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="email-outline" color="#2C3135" />}
                />
                <Text style={{ alignSelf: 'flex-start' }}>User Name</Text>
                <TextInput
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    textColor="#999999"
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={(text) => setState({ ...states, userName: text })}
                    placeholder="Enter User Name"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="account-outline" color="#2C3135" />}
                />
                <Text style={{ alignSelf: 'flex-start' }}>First Name</Text>
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
                    placeholder="Enter First Name"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="account-outline" color="#2C3135" />}
                />
                <Text style={{ alignSelf: 'flex-start' }}>Last Name</Text>
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
                    placeholder="Enter Last Name"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="account-outline" color="#2C3135" />}
                />
                {/* <CTextInput
                    label={'New Phone Number'}
                    placeholder={'phone_number'}
                    // error={error?.phone_number}
                    containerStyle={{}}
                    boxStyle={{ borderWidth: 1 }}
                    onChangeText={text => {
                        // handleChange('phone_number', text);
                    }}
                    // value={form?.phone_number}
                    keyboardType={'numeric'}
                    onSelect={value => {
                        // handleChange('country', value);
                        // handleChange('country_code', '+' + value.callingCode.toString());
                    }}
                    countryCode={'US'}
                    type={'phoneNumber'}
                /> */}
                {/* <Text style={{ alignSelf: 'flex-start' }}>Last Name</Text> */}
                {/* <TextInput
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    textColor="#999999"
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    autoCapitalize="none"
                    returnKeyType="done"
                    placeholder="Enter Last Name"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="account-outline" color="#2C3135" />}
                /> */}
                <CustomButton
                    description="Save and continue"
                    containerStyle={{ backgroundColor: Colors.primary }}
                    onPressButton={() => navigation.navigate(RoutesConfig.CARETOSHARESCREEN)}
                    imageStyle={{ height: 15, marginLeft: 10, width: 15 }}
                    icon={Images.SuffixIcon} />
                <Image source={Images.RukkorLogo} style={styles.imageContain} />
            </WrapperContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    login_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(50),

    },
    imageContain: {
        height: 50,
        width: 50
    },
    footer: { justifyContent: 'flex-end', paddingHorizontal: horizontalScale(30), marginBottom: horizontalScale(20), },
    sign_textstyle: {
        color: Colors.black,
        fontSize: responsiveFontSize(4),
        // fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: verticalScale(50)
    },
    sign_description_textstyle: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
    wrapper: {},
    forgetPassword: { alignSelf: 'flex-end' }
})

export default RealIDComponent;