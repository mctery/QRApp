import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//home
import Login from './src/view/home/Login';
import Register from './src/view/home/Register';
//main
import Main from './src/view/main/Main';
import Setting from './src/view/main/Setting';

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

        <Stack.Screen name="หน้าแรก" component={Main} />
        <Stack.Screen name="ตั้งค่า" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;