import LoginComponent from "components/auth/LoginComponent";
import OnBoardingComponent from "components/auth/OnBoardingComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { Colors } from "theme/Color";

const OnBoardingScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <View style={{ flex: 1 }}>
                <OnBoardingComponent />
            </View>
        </SafeAreaView>

    )
}

export default OnBoardingScreen;