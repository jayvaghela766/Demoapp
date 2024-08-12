import AliasComponent from "components/auth/AliasComponent";
import CareToShareComponent from "components/auth/CareToShareComponent";
import RealIDComponent from "components/auth/RealIDComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"

const AliasScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent />
            <View style={{ flex: 1 }}>
                <AliasComponent />
            </View>
        </SafeAreaView>

    )
}

export default AliasScreen;