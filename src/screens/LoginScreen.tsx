import LoginComponent from "components/auth/LoginComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { Colors } from "theme/Color";

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent />
            <View style={{ flex: 1 }}>
                <LoginComponent />
            </View>
        </SafeAreaView>

    )
}

export default LoginScreen;