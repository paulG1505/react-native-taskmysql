import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layouts from '../components/Layouts'
import { saveTask, getTask, updateTask } from '../api'



const TaskFormScreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const [editing, setEditing] = useState(false)

  const handleChange = (name, value) => setTask({ ...task, [name]: value })

  const handleSubmit = async () => {
    try {

      if (!editing) {
        await saveTask(task);
      } else {
        await updateTask(route.params.id, task);
      }
    } catch (error) {
      console.error(error)
    }
    navigation.navigate('HomeScreen')
  }
  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({
        headerTitle: 'Updating a Task'
      });
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id)
        setTask({ title: task.title, description: task.description })
      })();
    }
  }, [])

  return (
    <Layouts>
      <TextInput style={styles.input}
        placeholder="Escriba el titulo de la tarea"
        placeholderTextColor='#576574'
        onChangeText={(text) => handleChange('title', text)}
        value={task.title}
      />
      <TextInput style={styles.input}
        placeholder="Escriba la descripción de la tarea"
        placeholderTextColor='#576574'
        onChangeText={(text) => handleChange('description', text)}
        value={task.description}
      />
      {
        !editing ? (
          <TouchableOpacity style={styles.btnSave}
            onPress={handleSubmit}
          >
            <Text style={styles.textbtn}>Save Task</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btnUpdate}
            onPress={handleSubmit}
          >
            <Text style={styles.textbtn}>Update Task</Text>
          </TouchableOpacity>
        )
      }

    </Layouts>
  )
}

export default TaskFormScreen

const styles = StyleSheet.create({
  input: {
    width: '90%',
    fontSize: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 40,
    color: '#ffff',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5
  },
  btnSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#10ac84',
    width: '90%'
  },
  textbtn: {
    color: '#ffff',
    textAlign: 'center'
  },
  btnUpdate:{
    padding:10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#e58e26',
    width: '90%'
  }
})