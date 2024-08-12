import CareToShareComponent from "components/auth/CareToShareComponent";
import RealIDComponent from "components/auth/RealIDComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"

const CareToShareScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent />
            <View style={{ flex: 1 }}>
                <CareToShareComponent />
            </View>
        </SafeAreaView>

    )
}

export default CareToShareScreen;