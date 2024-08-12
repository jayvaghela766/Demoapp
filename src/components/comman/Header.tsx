import React, { useState } from "react"
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { Images } from "theme/Images";
import { Avatar } from "react-native-elements";
import Tooltip from 'react-native-walkthrough-tooltip';
const Header = (props: any) => {
    const [toolTipVisible, setToolTipVisible] = useState(false)
    return (
        <>
            {props?.isBack ?
                <View style={[props?.headerStyle, Styles.backcontainer]}>
                    {props.leftChildren}
                    {props.text ? <Text style={[props.textStyle]}>{props?.text}</Text> : <Image source={Images.appLogo} resizeMode="contain" style={{ height: 30, width: 100 }}></Image>}
                </View>
                : <View style={Styles.container}>
                    <Image source={Images.menuIcon} style={{ height: 20, width: 20 }} resizeMode="contain"></Image>
                    <Image source={Images.appLogo} resizeMode="contain" style={{ height: 30, width: 100 }}></Image>
                    <Tooltip
                        isVisible={toolTipVisible}
                        content={<>
                            <FlatList
                                data={['Logout', 'Settings']}
                                renderItem={({ item, index }) => (
                                    <Text style={{ paddingHorizontal: 10,fontWeight:'bold', paddingVertical: 8 }}>{item}</Text>
                                )}
                            />
                        </>}
                        placement="bottom"
                        onClose={() => setToolTipVisible(false)}
                    >
                        <Avatar
                            onPress={() => setToolTipVisible(true)}
                            size={40}
                            rounded
                            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }}
                            containerStyle={{ borderWidth: 2, borderColor: '#1AB0A5', alignSelf: 'center' }}
                        />
                    </Tooltip>

                </View>}
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#262634',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backcontainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default Header;