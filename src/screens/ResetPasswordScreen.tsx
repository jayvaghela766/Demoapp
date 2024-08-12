import ForgetComponent from "components/auth/ForgetComponent";
import LoginComponent from "components/auth/LoginComponent";
import ResetPasswordComponent from "components/auth/ResetPasswordComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { Colors } from "theme/Color";

const ResetPasswordScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <View style={{ flex: 1 }}>
                <ResetPasswordComponent />
            </View>
        </SafeAreaView>

    )
}

export default ResetPasswordScreen;