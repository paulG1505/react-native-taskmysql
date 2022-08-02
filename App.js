import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#ffff' },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskFormScreen')}
              >
                <Text>Press Here</Text>
              </TouchableOpacity>
            ),
          })} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
