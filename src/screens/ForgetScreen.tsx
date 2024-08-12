import ForgetComponent from "components/auth/ForgetComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { Colors } from "theme/Color";

const ForgetScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <View style={{ flex: 1 }}>
                <ForgetComponent />
            </View>
        </SafeAreaView>
    )

}

export default ForgetScreen;