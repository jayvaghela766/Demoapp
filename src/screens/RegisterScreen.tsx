import RegisterComponent from "components/auth/RegisterComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { Colors } from "theme/Color";

const RegisterScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <View style={{ flex: 1 }}>
                <RegisterComponent />
            </View>
        </SafeAreaView>


    )
}

export default RegisterScreen;