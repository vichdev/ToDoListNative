import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {Context} from './context/ToDoContext';
import Home from './views/Home';
import ToDoList from './views/ToDoList';

const Stack = createNativeStackNavigator();

const App: React.FC = ({navigation}: any) => {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#282c34',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default App;
