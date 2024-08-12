import { useNavigation } from "@react-navigation/native";
import SuccessComponent from "components/comman/SuccessComponent";
import { RoutesConfig } from "navigation/routeConstant";
import React, { useEffect } from "react"
import { Image, SafeAreaView, View } from "react-native"
import { Colors } from "theme/Color";
import { Images } from "theme/Images";

const SplashScreen = () => {
    const navigation=useNavigation()
    setTimeout(() => {
        navigation.navigate(RoutesConfig.LOGIN);
      }, 2000);
    
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: Colors.primary }}>
            <Image source={Images.appLogo} style={{ height: 50,alignSelf:'center' }} resizeMode="contain" />
        </SafeAreaView>
    )
}

export default SplashScreen;