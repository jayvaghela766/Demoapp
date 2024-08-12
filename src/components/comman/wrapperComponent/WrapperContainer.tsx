import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Avatar } from "react-native-paper"
import { Colors } from "theme/Color"
import { responsiveFontSize } from "theme/FontSize"
import { Images } from "theme/Images"
import { horizontalScale, verticalScale } from "theme/ResponsiveSize"

export const WrapperContainer = (props: any) => {
    return (
        <KeyboardAwareScrollView
            // contentContainerStyle={styles.container}
            >
            <View style={styles.login_container}>
               {props?.backgroundImage && <Image source={props?.backgroundImage} style={styles.imageContain}/>}
                {props?.description && <Text style={styles.sign_description_textstyle}>{props?.description}</Text>}
                {props.children}
            </View>
        </KeyboardAwareScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    login_container: {
        flex: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(20),
        paddingTop:10
    },
    sign_textstyle: {
        color: Colors.lightGreen,
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: verticalScale(10)
    },
    sign_description_textstyle: {
        color: Colors.white,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
    imageContain: {
        height: 120,
        width:120
        // alignSelf: 'center',
        // marginBottom: verticalScale(10)
    },
    wrapper: {},
})
export default WrapperContainer