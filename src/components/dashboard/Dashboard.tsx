import { useNavigation } from "@react-navigation/native";
import ForgetComponent from "components/auth/ForgetComponent";
import LoginComponent from "components/auth/LoginComponent";
import ResetPasswordComponent from "components/auth/ResetPasswordComponent";
import CustomButton from "components/comman/CustomButton";
import { RoutesConfig } from "navigation/routeConstant";
import React from "react"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import { View } from "react-native"
import { PieChart } from "react-native-gifted-charts";
import { Colors } from "theme/Color";
import { responsiveFontSize } from "theme/FontSize";
import { verticalScale } from "theme/ResponsiveSize";

const Dashboard = () => {
    const navigation=useNavigation();
    const realestateList = [{ name: 'Fund Inception Date', price: '11/01/2023' }, {
        name: 'Total Net Assets', price: '£2MM'
    }, {
        name: 'Fund Inception Date', price: '11/01/2023'
    }]
    const renderDot = (color: string) => {
        return (
            <View
                style={{
                    height: 12,
                    width: 12,
                    borderRadius: 8,
                    backgroundColor: color,
                    marginRight: 10,
                }}
            />
        );
    };

    const renderLegendComponent = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 20,
                        }}>
                        {renderDot('#006DFF')}
                        <Text style={{ color: 'white' }}>Stock</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20, }}>
                        {renderDot('#8F80F3')}
                        <Text style={{ color: 'white' }}>Bonds</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}>
                        {renderDot('#3BE9DE')}
                        <Text style={{ color: 'white' }}>Off Plan</Text>
                    </View>
                </View>
            </>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <ScrollView>
                <View style={Styles.container}>
                    <Text style={Styles.welcome_txt}>Welcome</Text>
                    <Text style={Styles.welcome_description_textstyle}>Ahmad Humayun Habib</Text>
                    <View
                        style={{
                            marginTop: 20,
                            paddingVertical: 16,
                            borderRadius: 20,
                            backgroundColor: '#2E439F',
                        }}>
                        <View style={{ alignItems: 'center' }}>
                            <PieChart
                                data={[
                                    { value: 30, color: 'rgb(84,219,234)' },
                                    { value: 40, color: 'lightgreen' },
                                    { value: 20, color: 'orange' },
                                ]}
                                donut
                                showGradient
                                radius={120}
                                innerRadius={90}
                                innerCircleColor={'#2E439F'}
                                centerLabelComponent={() => {
                                    return (
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>Total Investment</Text>
                                            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>   £50,789.32 </Text>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                        {renderLegendComponent()}
                    </View>

                    <View style={Styles.card}>
                        <Text style={Styles.real_txt}>Real Estate Income Fund</Text>
                        <View style={Styles.main_view}>
                            <View style={Styles.inner_view}>
                                <Text style={Styles.left_text}>Fund Inception Date</Text>
                                <Text style={Styles.date_text}>11/01/2023</Text>
                            </View>
                            <View style={Styles.inner_view}>
                                <Text style={Styles.left_text}>Total Net Assets</Text>
                                <Text style={Styles.total_net_txt}>£2MM</Text>
                            </View>
                            <View style={Styles.inner_view}>
                                <Text style={Styles.left_text}>Since Inception</Text>
                                <Text style={Styles.since_inception_txt}>+7%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.button_container}>
                        <CustomButton
                            description="Deposit"
                            onPressButton={() => navigation.navigate(RoutesConfig.DEPOSIT)}
                            containerStyle={{ backgroundColor: '#DFEAFA', flex: 1,marginRight:10 }}
                            textStyle={{ fontWeight: '600', color: Colors.black }} />
                        <CustomButton
                            description="Withdrawal"
                            onPressButton={() => navigation.navigate(RoutesConfig.WITHDRAWAL)}
                            containerStyle={{ backgroundColor: '#DFEAFA', flex: 1 ,marginLeft:10}}
                            textStyle={{ fontWeight: '600', color: Colors.black }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: { flex: 1, margin: 16 },
    welcome_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: verticalScale(5)
    },
    welcome_description_textstyle: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
    },
    inner_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    real_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        borderBottomColor: Colors.black,
        borderBottomWidth: 1,
        padding: 12,
    },
    left_text: {
        color: Colors.lightGray,
        fontSize: responsiveFontSize(1.5),
    },
    date_text: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold'
    },
    total_net_txt: {
        color: Colors.greenTextColor,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold'
    },
    since_inception_txt: {
        color: Colors.yellowTextColor,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold'
    },
    main_view: {
        padding: 12,
    },
    card: {
        borderRadius: 12,
        flex: 1,
        marginVertical: 10,
        backgroundColor: '#2A2A3A'
    },
    button_container: {
        flex: 1,
        flexDirection: 'row'
    }

})

export default Dashboard;