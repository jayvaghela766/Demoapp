
import React, { useState } from "react"
import CustomButton from "components/comman/CustomButton";
import { Image, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text } from "react-native";
import { View } from "react-native"
import { TextInput } from "react-native-paper";
import { Colors } from "theme/Color";
import { responsiveFontSize } from "theme/FontSize";
import { horizontalScale, verticalScale } from "theme/ResponsiveSize";
import DropdownComponent from "components/comman/DropdownComponent";
import { Images } from "theme/Images";

const Transaction = () => {
    const [activeTab, setActiveTab] = useState('All')
    let tabList = ['All', 'Withdrawal', 'Deposit'];
    const DATA = [
        {
            title: 'Desserts',
            data: [{ name: 'Cheese Cake', status: 'Processing', currentMonth: true }],
        },
        {
            title: 'Main dishes',
            data: [{ name: 'Pizza', status: 'Processing', currentMonth: false }, { name: 'Burger', status: 'Processing', currentMonth: false }, { name: 'Risotto', status: 'Processing', currentMonth: false }],
        },
        {
            title: 'Sides',
            data: [{ name: 'French Fries', status: 'Success', currentMonth: false }, { name: 'Onion Rings', status: 'Processing', currentMonth: false }, { name: 'Fried Shrimps', status: 'Success', currentMonth: false }],
        },
        {
            title: 'Drinks',
            data: [{ name: 'Water', status: 'Processing', currentMonth: false }, { name: 'Coke', status: 'Declined', currentMonth: false }],
        },

    ];


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <View style={Styles.container}>
                <View style={Styles.tabView}>
                    {tabList?.map((tb, index) => {
                        return <CustomButton
                            description={tb}
                            key={index}
                            customeBorderRadius={8}
                            onPressButton={() => setActiveTab(tb)}
                            containerStyle={{ marginHorizontal: 5, borderRadius: 8, backgroundColor: tb == activeTab ? '#DFEAFA' : Colors.primary, flex: 1, borderColor: '#DFEAFA', borderWidth: 1 }}
                            textStyle={{ fontWeight: '600', color: tb == activeTab ? Colors.black : Colors.white }} />
                    })}
                </View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => {
                        let status = item?.status == 'Processing' ? Images.pending : item?.status == 'Success' ? Images.success : Images.declined;
                        let cardBg = item.currentMonth ? Styles.cardContainerActive : Styles.cardcontainer
                        let firstTxtStyle = item.currentMonth ? Styles.real_txt_active : Styles.real_txt
                        let dateTxtStyle = item.currentMonth ? Styles.left_text_card_active : Styles.left_text_card
                        let statusStyle = item.currentMonth ? Styles.success_txt_active : Styles.success_txt
                        let priceStyle = item.currentMonth ? Styles.right_Text_active : Styles.right_Text
                        return (
                            <View style={cardBg}>
                                <Text style={firstTxtStyle}>Withdrawal</Text>
                                <View style={Styles.container_inner_view}>
                                    <Text style={dateTxtStyle}>21.38 - 20/10/2023</Text>
                                    <Text style={priceStyle}>£5,000</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: horizontalScale(10), }}>
                                    <Image source={status} />
                                    <Text style={statusStyle}>{item.status}</Text>
                                </View>
                            </View>
                        )
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={Styles.real_txt}>{title}</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: horizontalScale(15), marginTop: verticalScale(20) },
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
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(25),
        backgroundColor: Colors.primary
    },
    container_inner_view: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(10),
        justifyContent: 'space-between',
    },
    success_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        fontWeight: '600',
        paddingLeft: 10,
    },
    success_txt_active: {
        color: Colors.black,
        fontSize: responsiveFontSize(1.5),
        fontWeight: '600',
        paddingLeft: 10,
    },

    cardcontainer: {
        borderRadius: 12,
        flex: 1,
        marginVertical: 10,
        paddingVertical: 15,
        backgroundColor: Colors.lightPurple
    },
    cardContainerActive: {
        borderRadius: 12,
        flex: 1,
        marginVertical: 10,
        paddingVertical: 15,
        backgroundColor: Colors.lightBlue
    },
    real_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        paddingHorizontal: 12,
    },
    real_txt_active: {
        color: Colors.black,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        paddingHorizontal: 12,
    },
    left_text: {
        color: Colors.white,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold'
    },
    left_text_card: {
        color: Colors.lightGray,
        fontSize: responsiveFontSize(1.5),
        marginVertical:verticalScale(2)
    },
    left_text_card_active: {
        color: Colors.black,
        fontSize: responsiveFontSize(1.5),
    },
    right_Text: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    right_Text_active: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold',
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
        color: Colors.lightGray,
        fontSize: responsiveFontSize(1.7),
    },
    tabView: {
        marginHorizontal: horizontalScale(30),
        flexDirection: 'row',
    }

})

export default Transaction;