import React from "react"
import { StyleSheet, Text, View } from "react-native"

const ErrorPopUp = (props) => {
    return (
        <View style={styles.card}>
            <Text>{props?.description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFEBB6',
        borderRadius: 10,
        padding: 12,
        width:'100%'
    }
})

export default ErrorPopUp;