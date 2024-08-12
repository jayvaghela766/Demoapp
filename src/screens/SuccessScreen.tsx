import SuccessComponent from "components/comman/SuccessComponent";
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { Colors } from "theme/Color";

const SuccessScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <View style={{ flex: 1 }}>
                <SuccessComponent />
            </View>
        </SafeAreaView>

    )
}

export default SuccessScreen;