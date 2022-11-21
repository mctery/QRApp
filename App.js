import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/view/home/Login';
// import AttractionDetails from './src/home/AttractionDetails'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Login/>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="จองที่จอดรถผู้พิการ" component={Login} />
        <Stack.Screen name="Attraction Details" component={AttractionDetails} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;