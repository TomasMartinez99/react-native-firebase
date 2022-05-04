import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// Para sacar warning
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import UsersList from './screens/UsersList';

const Stack = createNativeStackNavigator();

/* Contiene las múltiples pantallas */
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='CreateUserScreen' 
        component={CreateUserScreen} 
        options={{title: 'Create a new user'}}
      />
      <Stack.Screen 
        name='UsersList' 
        component={UsersList} 
        options={{title: 'Users list'}}
      />
      <Stack.Screen 
        name='UserDetailScreen' 
        component={UserDetailScreen} 
        options={{title: 'User detail'}}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
