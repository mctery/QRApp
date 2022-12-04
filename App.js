import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//api db
import { DB_initialConfig, DBget_UserInformation, DBset_setDeleteUserInformation } from './src/db/db_user_service'

//home
import Login from './src/view/home/Login';
import Register from './src/view/home/Register';
//main
import Main from './src/view/main/Main';

const Stack = createNativeStackNavigator();

function App() {

  React.useEffect(() => {
    Of_initial()
  }, [])

  async function Of_initial() {
    let create = await DB_initialConfig()
    console.log(create)
  }

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;