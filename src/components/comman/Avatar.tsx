import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Images } from "theme/Images";

const Avatar = () => {
    return (
        <View style={Styles.container}>
           <Image source={Images.menuIcon} style={{height:25,width:25}}></Image>
        </View>
    )
}

const Styles=StyleSheet.create({
    // container:{
    //     flex: 1,
    //     bo
       

    // }
})
export default Avatar;