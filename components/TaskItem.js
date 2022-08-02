import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({item}) => {
    
    return (
        <View style={styles.itemComponent}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemTitle}>{item.description}</Text>
        </View>
    )
}

export default TaskItem
const styles = StyleSheet.create({
    itemComponent: {
        backgroundColor:'#333333',
        padding:20,
        marginVertical:5,
        borderRadius:8,
    },
    itemTitle:{
        color:'#fffff',
    }
})