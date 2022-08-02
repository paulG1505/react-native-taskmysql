import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { getTasks } from '../api'
import Layouts from '../components/Layouts'
import TaskList from '../components/TaskList'

const HomeScreen = () => {

    const [tasks, setTasks] = useState([]);


    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data)
    }

    useEffect(() => {
        loadTasks();
    }, [])

    return (

        <Layouts>
            <TaskList tasks={tasks} />
        </Layouts>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})