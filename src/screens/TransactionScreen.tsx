import React from "react"
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import Header from "components/comman/Header";
import { Colors } from "theme/Color";
import { responsiveFontSize } from "theme/FontSize";
import { Images } from "theme/Images";
import Transaction from "components/dashboard/Transaction";

const TransactionScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={Styles.container}>
              <StatusBar
                animated={true}
                backgroundColor={Colors.bluecolor}
            />
            <Header
                isBack={true}
                headerStyle={{ backgroundColor: Colors.bluecolor ,paddingVertical:10}}
                leftChildren={<TouchableOpacity style={{ width: 50 }} onPress={() => navigation.goBack()}>
                    <Image source={Images.back} resizeMode="contain" style={{ height: 15, width: 15 }}></Image></TouchableOpacity>}
                text="Transactions"
                textStyle={Styles.headerTxt}
            />
            <Transaction />
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
export default TransactionScreen;