import { FlatList, Text } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {

    const renderItem = ({ item }) => {
        return <TaskItem item={item} />
    }

    return (
        <FlatList
            style={{width:'100%'}}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
        />
    )
}

export default TaskList;