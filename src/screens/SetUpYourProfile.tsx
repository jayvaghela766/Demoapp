import { useNavigation } from "@react-navigation/native";
import LoginComponent from "components/auth/LoginComponent";
import SuccessComponent from "components/comman/SuccessComponent";
import { RoutesConfig } from "navigation/routeConstant";
import React from "react"
import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Colors } from "theme/Color";
import { responsiveFontSize } from "theme/FontSize";
import { Images } from "theme/Images";
import { horizontalScale, moderateScale, verticalScale } from "theme/ResponsiveSize";

const SetUpYourProfile = () => {
    const navigation=useNavigation()

    const data = [{
        title: 'Real ID',
        logo: Images.realId,
        onPress: () => { navigation.navigate(RoutesConfig.REALIDSCREEN)},
        description: 'With Real ID you can disclose your personal details like name, phone number, birthday, e-mail and more. Use your Real ID when interacting with trusted family, friends and colleagues.'
    },
    {
        title: 'Alias',
        logo: Images.alias,
        onPress: () => { navigation.navigate(RoutesConfig.ALIASSCREEN)},
        description: 'Using your Alias you can choose an additional @alias with which you can join Spaces and interact with other users in communities where you’re not comfortable sharing your personal details.'
    }]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primary} />
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.sign_textstyle}>Set up your profiles</Text>
                    <View style={{ flex: 1, marginTop: verticalScale(60) }}>
                        <Text style={styles.sign_description_textstyle}>
                            A habin_RN account is associated with two profiles, one which we call Real ID and one which is your Alias. You choose in which settings you wish to expose your true identity and in which you wish to use an alias.
                        </Text>

                        {data?.map((item) => {
                            return (
                                <Pressable style={styles.cardContainer} onPress={item.onPress}>
                                    <View style={styles.leftView}>
                                        <Text style={{ fontSize: 24 ,paddingVertical:10}}>{item.title}</Text>
                                        <Image source={item.logo} style={styles.imageView} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ lineHeight: 20 }}>{item.description}</Text>
                                    </View>
                                </Pressable>
                            )
                        })}

                    </View>
                </View>
                {/* <SuccessComponent /> */}
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: moderateScale(25)
    },
    login_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(50),
    },
    cardContainer: {
        borderRadius: 10,
        backgroundColor: Colors.grayTheme,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        marginVertical:verticalScale(10)
    },
    imageView:{ height: 60, width: 60 },
    leftView:{ alignItems: 'center', paddingHorizontal: 10 },
    sign_textstyle: {
        color: Colors.black,
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        marginBottom: verticalScale(10)
    },
    sign_description_textstyle: {
        color: Colors.black,
        fontSize: responsiveFontSize(1.8),
    },

    step_Text: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
    },
    imageContain: {
        height: 50,
        width: 50
    },
    personalDetails_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    wrapper: {},
    inner_view: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: '#20202C'
    },
    container_inner_view: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: horizontalScale(10),
        // backgroundColor: '#20202C',
        justifyContent: 'space-between',
    },
    left_text: {
        color: Colors.white,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold'
    },
    left_text_card: {
        color: Colors.lightGray,
        fontSize: responsiveFontSize(1.5),
    },
    button_container: {
        flex: 1,
        flexDirection: 'row'
    },
    desc_txt: {
        color: '#C6CADB',
        fontSize: responsiveFontSize(1.7),
    },
    card: {
        flex: 1,
        borderRadius: 12,
        marginVertical: 10,
        borderColor: Colors.white,
        borderWidth: 1,
        paddingHorizontal: 5,
        marginRight: 10,
    },
    real_txt: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingVertical: 8,
        textAlign: 'center'
    },

})

export default SetUpYourProfile;