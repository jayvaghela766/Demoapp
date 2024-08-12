import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import CustomButton from "components/comman/CustomButton"
import WrapperContainer from "components/comman/wrapperComponent/WrapperContainer"
import { RoutesConfig } from "navigation/routeConstant"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { HelperText, TextInput } from "react-native-paper"
import { Colors } from "theme/Color"
import { responsiveFontSize } from "theme/FontSize"
import { Images } from "theme/Images"
import { horizontalScale, verticalScale } from "theme/ResponsiveSize"
import isEmpty from 'lodash/isEmpty';
import { regex } from "theme/common"


const LoginComponent = () => {
    const navigation = useNavigation();
    const [passwordSecurity, setPasswordSecurity] = useState(true);
    const [error, setError] = useState({});
    const [form, setForm] = useState({});

    console.log('error', error)
    const onChange = (field, value) => {
        form[field] = value;
        error[field] = checkValidation(field);
        setForm({ ...form })
        setError({ ...error });
    }

    const checkValidation = (field) => {
        let errorMessage = '';
        const { email, password } = form;
        if (field === 'email' && isEmpty(email)) {
            errorMessage = 'Email is Required';
        } else if (field === 'email' && !isEmpty(email) && regex.email.test(email) === false) {
            errorMessage = 'Invalid Email';
        } else if (field === 'password' && isEmpty(password)) {
            errorMessage = 'Password is Required';
        } if (field === 'password' && !isEmpty(password) && password.length < 6) {
            errorMessage = "minimum 6 character required";
        }
        else if (field === 'password' && !isEmpty(password) && regex.atLeastOne.test(password) === false) {
            errorMessage = "At least one number and letter required";
        }
        return errorMessage;
    }

    const handleLogin = () => {
        //caling api
        navigation.navigate(RoutesConfig.REGISTER)
    }

    return (
        <View style={styles.container}>
            <WrapperContainer backgroundImage={Images.RukkorLogo} label={'Sign in to your Account'} description="Create a new Habisbson account and get started with your investment journey with us">
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
                    value={form.email}
                    onChangeText={(text) => onChange('email', text)}
                    onFocus={() => onChange('email', form.email)}
                    returnKeyType="done"
                    placeholder="Enter your e-mail"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="email" color="#2C3135" />}
                />
                <HelperText type="error" visible={error.email} style={{ alignSelf: 'flex-start' }}>
                    {error.email}
                </HelperText>
                <View style={styles.forgetPassword}>
                    <TouchableOpacity onPress={() => navigation.navigate(RoutesConfig.RESET_PASSWORD)}>
                        <Text style={{ color: Colors.primary }}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ alignSelf: 'flex-start', color: '#2C3135' }}>Password</Text>
                <TextInput
                    value={form.password}
                    onFocus={() => onChange('password', form.password)}
                    onChangeText={(text) => onChange('password', text)}
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    textColor="#999999"
                    autoCapitalize="none"
                    placeholder="Enter your password"
                    returnKeyType="done"
                    secureTextEntry={passwordSecurity}
                    left={<TextInput.Icon icon="lock" color="#2C3135" onPress={() => setPasswordSecurity(!passwordSecurity)} />}
                    right={<TextInput.Icon icon={!passwordSecurity ? "eye-off" : "eye"} color={"#2C3135"} onPress={() => setPasswordSecurity(!passwordSecurity)} />}
                />
                <HelperText type="error" visible={error.password} style={{ alignSelf: 'flex-start' }}>
                    {error.password}
                </HelperText>
                <Text style={{ alignSelf: 'flex-start' }}>Language</Text>
                <TextInput
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    textColor="#999999"
                    autoCapitalize="none"
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    placeholder="Language"
                    returnKeyType="done"
                    secureTextEntry={passwordSecurity}
                    left={<TextInput.Icon icon="earth" color="#2C3135" onPress={() => setPasswordSecurity(!passwordSecurity)} />}
                />

            </WrapperContainer>
            <View style={styles.footer}>
                <CustomButton description="Log In" containerStyle={{ backgroundColor: Colors.primary }} onPressButton={() => handleLogin()} />
                <CustomButton description="Create new account" containerStyle={{ borderColor: Colors.primary, borderWidth: 1 }} textStyle={{ color: Colors.primary }} onPressButton={() => navigation.navigate(RoutesConfig.REGISTER)} />
            </View>
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
    footer: {
        justifyContent: 'flex-end',
        paddingHorizontal: horizontalScale(30),
        marginBottom: horizontalScale(20),
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
    forgetPassword: { alignSelf: 'flex-end' }
})

export default LoginComponent;