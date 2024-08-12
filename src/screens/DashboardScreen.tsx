import ForgetComponent from "components/auth/ForgetComponent";
import LoginComponent from "components/auth/LoginComponent";
import ResetPasswordComponent from "components/auth/ResetPasswordComponent";
import Header from "components/comman/Header";
import Dashboard from "components/dashboard/Dashboard";
import React from "react"
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import { Colors } from "theme/Color";

const DashboardScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <View style={Styles.container}>
                <Header />
                <Dashboard />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
})
export default DashboardScreen;