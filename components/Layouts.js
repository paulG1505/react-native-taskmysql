import { StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'

const Layouts = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#222f3e" />
            {children}
        </View>
    )
}

export default Layouts

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222f3e',
        padding: 20,
        flex: 1,
        alignItems: 'center',
    }

})    