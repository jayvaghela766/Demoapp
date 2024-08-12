import RealIDComponent from "components/auth/RealIDComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"

const RealIDScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent />
            <View style={{ flex: 1 }}>
                <RealIDComponent />
            </View>
        </SafeAreaView>

    )
}

export default RealIDScreen;