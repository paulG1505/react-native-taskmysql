import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Layouts from '../components/Layouts'
import TaskList from '../components/TaskList'

const HomeScreen = () =>(
    <Layouts>
        <TaskList />
    </Layouts>
);

export default HomeScreen

const styles = StyleSheet.create({})