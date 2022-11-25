import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/view/home/Login';
import Register from './src/view/home/Register';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="จองที่จอดรถผู้พิการ" component={Login} />
        <Stack.Screen name="สมัครใช้งาน" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;