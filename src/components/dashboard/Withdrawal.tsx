
import React, { useState } from "react"
import CustomButton from "components/comman/CustomButton";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import { View } from "react-native"
import { TextInput } from "react-native-paper";
import { Colors } from "theme/Color";
import { responsiveFontSize } from "theme/FontSize";
import { horizontalScale, verticalScale } from "theme/ResponsiveSize";

const Withdrawal = () => {
    const [name, setName] = useState('')
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
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={Styles.inner_view}>
                        <Text style={Styles.left_text}>Select Amount</Text>
                        <TextInput
                            mode="outlined"
                            testID="input"
                            label="Amount"
                            style={{ backgroundColor: Colors.primary, marginVertical: 10, fontSize: 14 }}
                            outlineStyle={{ borderColor: Colors.white }}
                            theme={{ colors: { onSurfaceVariant: 'white' }, roundness: 8 }}
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
                                            <Text style={Styles.real_txt}>{`$${itm}000`}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <Text style={Styles.left_text}>Withdraw to</Text>
                        <TextInput
                            testID="input"
                            label="Account Number"
                            style={{ backgroundColor: Colors.primary, marginVertical: 10, fontSize: 14 }}
                            outlineStyle={{ borderColor: Colors.white }}
                            theme={{ colors: { onSurfaceVariant: 'white' }, roundness: 8 }}
                            contentStyle={{ color: '#fff' }}
                            selectionColor="#fff"
                            value={name === '' ? '' : name}
                            onChangeText={name => setName(name)}
                            mode="outlined"
                            activeOutlineColor="white"
                            outlineColor="white"
                            textColor="white"
                            autoCapitalize="none"
                            blurOnSubmit={false}
                            returnKeyType="done"

                        />
                        <TextInput
                            mode="outlined"
                            testID="input"
                            label="Sort Code"
                            style={{ backgroundColor: Colors.primary, marginVertical: 10, fontSize: 14 }}
                            outlineStyle={{ borderColor: Colors.white }}
                            theme={{ colors: { onSurfaceVariant: 'white' }, roundness: 8 }}
                            contentStyle={{ color: '#fff' }}
                            selectionColor="#fff"
                            value={name === '' ? '' : name}
                            onChangeText={name => setName(name)}
                            activeOutlineColor="white"
                            outlineColor="white"
                            textColor="white"
                            autoCapitalize="none"
                            blurOnSubmit={false}
                            returnKeyType="done"
                        />
                        <TextInput
                            mode="outlined"
                            testID="input"
                            label="Preferred Date"
                            style={{ backgroundColor: Colors.primary, marginVertical: 10, fontSize: 14 }}
                            outlineStyle={{ borderColor: Colors.white }}
                            theme={{ colors: { onSurfaceVariant: 'white' }, roundness: 8 }}
                            contentStyle={{ color: '#fff' }}
                            selectionColor="#fff"
                            value={name === '' ? '' : name}
                            onChangeText={name => setName(name)}
                        />


                        <CustomButton
                            description="Cancel"
                            containerStyle={{ backgroundColor: '#DFEAFA', flex: 1, }}
                            textStyle={{ fontWeight: '600', color: Colors.black }} />
                        <CustomButton
                            description="Request Withdrawal"
                            containerStyle={{ backgroundColor: Colors.buttonColor, flex: 1, }}
                            textStyle={{ fontWeight: '600', color: Colors.white }} />

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
    real_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        // borderBottomColor: Colors.black,
        // borderBottomWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        textAlign: 'center'
    },
    left_text: {
        color: Colors.white,
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold'
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
        fontSize: responsiveFontSize(1.6),
    }

})

export default Withdrawal;