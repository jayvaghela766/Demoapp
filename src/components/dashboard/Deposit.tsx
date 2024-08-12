
import React, { useState } from "react"
import CustomButton from "components/comman/CustomButton";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import { View } from "react-native"
import { TextInput } from "react-native-paper";
import { Colors } from "theme/Color";
import { responsiveFontSize } from "theme/FontSize";
import { horizontalScale, verticalScale } from "theme/ResponsiveSize";
import DropdownComponent from "components/comman/DropdownComponent";
import { useNavigation } from "@react-navigation/native";
import { RoutesConfig } from "navigation/routeConstant";

const Deposit = () => {
    const [name, setName] = useState('');
    const navigation = useNavigation();
    const realestateList = [{ name: 'Fund Inception Date', price: '11/01/2023' }, {
        name: 'Total Net Assets', price: '£2MM'
    }, {
        name: 'Fund Inception Date', price: '11/01/2023'
    }]



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <View style={Styles.container}>
                <View style={Styles.main_view_style}>
                    <Text style={Styles.welcome_description_textstyle}>Available Balance</Text>
                    <Text style={Styles.welcome_txt}>£18,320.00</Text>
                    <Text style={Styles.desc_txt}>Balance correct up until: 23/09/2023</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={Styles.inner_view}>
                        <Text style={Styles.left_text}>Select Amount</Text>
                        <TextInput
                            mode="outlined"
                            testID="input"
                            label="Amount"
                            style={{ backgroundColor: Colors.primary ,fontSize:14}}
                            outlineStyle={{ borderColor: Colors.white }}
                            theme={{ colors: { onSurfaceVariant: 'white' },roundness:8 }}
                            contentStyle={{ color: '#fff' }}
                            selectionColor="#fff"
                            value={name === '' ? '' : name}
                            onChangeText={name => setName(name)}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            {
                                [1, 2, 3].map(itm => {
                                    return (
                                        <View style={Styles.card}>
                                            <Text style={Styles.real_txt}>{`£${itm}000`}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <Text style={Styles.left_text}>Method</Text>
                        <DropdownComponent label="Select" />
                        <DropdownComponent label="Source of funds" />
                        <DropdownComponent label="Deposit Date" />
                        <View style={Styles.cardcotainer}>
                            <Text style={Styles.real_txt}>Real Estate Income Fund</Text>
                            <View style={Styles.main_view}>
                                <View style={Styles.container_inner_view}>
                                    <Text style={Styles.left_text_card}>FileName.png</Text>
                                    <Text style={Styles.right_Text}>Remove</Text>
                                </View>
                                <View style={Styles.container_inner_view}>
                                    <Text style={Styles.left_text_card}>FileName.png</Text>
                                    <Text style={Styles.right_Text}>Remove</Text>
                                </View>
                                <View style={Styles.container_inner_view}>
                                    <Text style={Styles.left_text_card}>FileName.png</Text>
                                    <Text style={Styles.right_Text}>Remove</Text>
                                </View>
                            </View>
                        </View>
                        <CustomButton
                            description="Upload Receipt"
                            onPressButton={() => navigation.navigate(RoutesConfig.SUCCESS_SCREEN,{label:'Complete!',description:'Deposit Submitted',buttonLabel:'Go to Dashboard',subDescription:'Please note that your deposit will be credited to your account upon receipt of transfer proof and successful completion of our security checks.'})}
                            containerStyle={{ backgroundColor: '#DFEAFA', flex: 1, }}
                            textStyle={{ fontWeight: '600', color: Colors.black }} />

                        <Text style={Styles.desc_txt}>Note: Your withdrawal request will undergo security checks and typically takes 3-5 working days for processing.</Text>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: { flex: 1 },
    welcome_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: verticalScale(5)
    },
    welcome_description_textstyle: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold'
    },
    main_view_style: { justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.bluecolor, paddingVertical: 25 },
    inner_view: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: horizontalScale(25),
        backgroundColor: '#20202C'
    },
    container_inner_view: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: horizontalScale(10),
        justifyContent: 'space-between',
    },

    cardcotainer: {
        borderRadius: 12,
        flex: 1,
        marginVertical: 10,
        backgroundColor: '#2A2A3A'
    },
    real_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingVertical: 8,
        textAlign: 'center'
    },
    left_text: {
        color: Colors.white,
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold'
    },
    left_text_card: {
        color: Colors.lightGray,
        fontSize: responsiveFontSize(1.5),
    },
    right_Text: {
        color: Colors.red,
        fontSize: 12,
        fontWeight: 'bold',
    },
    main_view: {
        padding: 12,
    },
    card: {
        borderRadius: 12,
        flex: 1,
        marginVertical: 10,
        borderColor: Colors.white,
        borderWidth: 1,
        marginRight: 10,
    },
    button_container: {
        flex: 1,
        flexDirection: 'row'
    },
    desc_txt: {
        color: '#C6CADB',
        fontSize: responsiveFontSize(1.7),
    }

})

export default Deposit;