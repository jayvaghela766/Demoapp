import { useNavigation } from "@react-navigation/native"
import CustomButton from "components/comman/CustomButton"
import { RoutesConfig } from "navigation/routeConstant"
import React, { useState } from "react"
import { Image,  StyleSheet, Text,  View } from "react-native"
import { Checkbox, HelperText, TextInput } from "react-native-paper"
import { Colors } from "theme/Color"
import { responsiveFontSize } from "theme/FontSize"
import { Images } from "theme/Images"
import { horizontalScale, moderateScale, verticalScale } from "theme/ResponsiveSize"
import isEmpty from 'lodash/isEmpty';
import { regex } from "theme/common"


const RegisterComponent = () => {
    const navigation = useNavigation();

    const [passwordSecurity, setPasswordSecurity] = useState(true);
    const [confirmpasswordSecurity, setConfirmPasswordSecurity] = useState(true);
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
        const { email, password, confirmPassword } = form;
        if (field === 'email' && isEmpty(email)) {
            errorMessage = 'Email is Required';
        } else if (field === 'email' && !isEmpty(email) && regex.email.test(email) === false) {
            errorMessage = 'Invalid Email';
        } else if (field === 'password' && isEmpty(password)) {
            errorMessage = 'Password is Required';
        } else if (field === 'password' && !isEmpty(password) && password.length < 6) {
            errorMessage = "minimum 6 character required";
        } else if (field === 'password' && !isEmpty(password) && regex.atLeastOne.test(password) === false) {
            errorMessage = "At least one number and letter required";
        } else if (field === 'confirmPassword' && isEmpty(confirmPassword)) {
            errorMessage = 'Confirm Password is Required';
        } else if (field === 'confirmPassword' && !isEmpty(password) && !isEmpty(confirmPassword) && password !== confirmPassword) {
            errorMessage = "Password mismatch"
        }
        return errorMessage;
    }

    const valifayionForm = () => {
        let errors = {}
        const { email, password, confirmPassword } = form;
        if (isEmpty(email)) {
            errors['email'] = 'Email is Required';
        } if (!isEmpty(email) && regex.email.test(email) === false) {
            errors['email'] = 'Invalid Email';
        } if (isEmpty(password)) {
            errors['password'] = 'Password is Required';
        } else if (!isEmpty(password) && password.length < 6) {
            errors['password'] = "minimum 6 character required";
        } else if (!isEmpty(password) && regex.atLeastOne.test(password) === false) {
            errors['password'] = "At least one number and letter required";
        } if (!isEmpty(password) && !isEmpty(confirmPassword) && password !== confirmPassword) {
            errors['confirmPassword'] = "Password mismatch"
        } if (isEmpty(confirmPassword)) {
            errors['confirmPassword'] = 'confirmPassword is Required';
        }
        for (var key in error) {
            if (error[key] != "") {
                break
            }
        }

        setError({ ...errors })
        return isEmpty(errors)
    }

    const handleRegistration = () => {
        //caling api
        if (valifayionForm()) {
            navigation.navigate(RoutesConfig.SET_UP_YOUR_PROFILE)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sign_textstyle}>Create new account</Text>

            <View>
                <Text style={{ alignSelf: 'flex-start' }}>Email *</Text>
                <TextInput
                    value={form.email}
                    onChangeText={(text) => onChange('email', text)}
                    onFocus={() => onChange('email', form.email)}
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    textColor="#999999"
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    autoCapitalize="none"
                    returnKeyType="done"
                    placeholder="Enter your e-mail"
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="email" color="#2C3135" />}
                />
                <HelperText type="error" visible={error.email} style={{ alignSelf: 'flex-start' }}>
                    {error.email}
                </HelperText>
                <Text style={{ alignSelf: 'flex-start', color: '#2C3135' }}>Password *</Text>
                <TextInput
                    value={form.password}
                    onChangeText={(text) => onChange('password', text)}
                    onFocus={() => onChange('password', form.password)}
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    textColor="#999999"
                    autoCapitalize="none"
                    placeholder="Choose a password"
                    returnKeyType="done"
                    secureTextEntry={passwordSecurity}
                    left={<TextInput.Icon icon="lock" color="#2C3135" />}
                    right={<TextInput.Icon icon={!passwordSecurity ? "eye-off" : "eye"} color={"#2C3135"} onPress={() => setPasswordSecurity(!passwordSecurity)} />}
                />
                <HelperText type="error" visible={error.password} style={{ alignSelf: 'flex-start' }}>
                    {error.password}
                </HelperText>
                <Text style={{ alignSelf: 'flex-start' }}>Confirm Password *</Text>
                <TextInput
                    value={form.confirmPassword}
                    onChangeText={(text) => onChange('confirmPassword', text)}
                    onFocus={() => onChange('confirmPassword', form.confirmPassword)}
                    theme={{ colors: { onSurfaceVariant: '#999999' }, roundness: 8 }}
                    style={{ backgroundColor: Colors.grayTheme, marginVertical: 10, fontSize: 14, fontWeight: '200', width: '100%' }}
                    activeOutlineColor={Colors.grayTheme}
                    outlineColor={Colors.grayTheme}
                    underlineColor={Colors.grayTheme}
                    activeUnderlineColor={Colors.grayTheme}
                    textColor="#999999"
                    autoCapitalize="none"
                    placeholder="Confirm your password"
                    returnKeyType="done"
                    secureTextEntry={confirmpasswordSecurity}
                    left={<TextInput.Icon icon="lock" color="#2C3135" />}
                    right={<TextInput.Icon icon={!confirmpasswordSecurity ? "eye-off" : "eye"} color={"#2C3135"} onPress={() => setConfirmPasswordSecurity(!confirmpasswordSecurity)} />}
                />
                <HelperText type="error" visible={error.confirmPassword} style={{ alignSelf: 'flex-start' }}>
                    {error.confirmPassword}
                </HelperText>

            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <CustomButton
                    description="Next"
                    containerStyle={{ backgroundColor: Colors.primary }}
                    onPressButton={() => handleRegistration()}
                    imageStyle={{ height: 15, marginLeft: 10, width: 15 }}
                    icon={Images.SuffixIcon} />
                <CustomButton description="Cancel account creation" containerStyle={{ backgroundColor: 'white', marginVertical: 0 }} textStyle={{ color: Colors.primary }} onPressButton={() => navigation.navigate(RoutesConfig.REGISTER)} />
                <Image source={Images.RukkorLogo} style={styles.imageContain} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: moderateScale(25)
    },
    login_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(50),
    },
    sign_textstyle: {
        color: Colors.black,
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        marginBottom: verticalScale(10)
    },
    sign_description_textstyle: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
    },

    step_Text: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
    },
    imageContain: {
        height: 50,
        width: 50
    },
    personalDetails_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    wrapper: {},
    inner_view: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: '#20202C'
    },
    container_inner_view: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: horizontalScale(10),
        // backgroundColor: '#20202C',
        justifyContent: 'space-between',
    },
    left_text: {
        color: Colors.white,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold'
    },
    left_text_card: {
        color: Colors.lightGray,
        fontSize: responsiveFontSize(1.5),
    },
    button_container: {
        flex: 1,
        flexDirection: 'row'
    },
    desc_txt: {
        color: '#C6CADB',
        fontSize: responsiveFontSize(1.7),
    },
    card: {
        flex: 1,
        borderRadius: 12,
        marginVertical: 10,
        borderColor: Colors.white,
        borderWidth: 1,
        paddingHorizontal: 5,
        marginRight: 10,
    },
    real_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingVertical: 8,
        textAlign: 'center'
    },

})

export default RegisterComponent;