import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const TaskItem = ({ item,handleDelete }) => {

    const navigation = useNavigation()
    return (
        <View style={styles.itemComponent}>
            <TouchableOpacity
                onPress={()=>navigation.navigate('TaskFormScreen',{id:item.id})}
            >
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemTitle}>{item.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
                onPress={() => handleDelete(item.id)}
            >
                <Text style={styles.btnDelete}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskItem
const styles = StyleSheet.create({
    itemComponent: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 5,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        color: '#ffff',
    },
    btnDelete: {
        color: '#ffff',
    }
})