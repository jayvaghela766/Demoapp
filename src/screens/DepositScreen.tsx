import { useNavigation } from "@react-navigation/native";
import Header from "components/comman/Header";
import Deposit from "components/dashboard/Deposit";
import React from "react"
import { Image, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native"
import { Colors } from "theme/Color";
import { responsiveFontSize } from "theme/FontSize";
import { Images } from "theme/Images";

const DepositScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.bluecolor} />
            <View style={Styles.container}>
                <Header isBack={true}
                    headerStyle={{ backgroundColor: Colors.bluecolor }}
                    leftChildren={<TouchableOpacity style={{ width: 50 }} onPress={() => navigation.goBack()}>
                        <Image source={Images.back} resizeMode="contain" style={{ height: 15, width: 15 }}></Image></TouchableOpacity>}
                    text="Deposit"
                    textStyle={Styles.headerTxt}
                />
                <Deposit />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    headerTxt: { color: Colors.white, fontSize: responsiveFontSize(2.5), fontWeight: '500', flex: 1 }
})
export default DepositScreen;