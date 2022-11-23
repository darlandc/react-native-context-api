import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login';
import Home from './pages/Home';
import Orders from './pages/Orders';

const Stack = createNativeStackNavigator();

function Routes() {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Orders" component={Orders}/>
    </Stack.Navigator>
  );
}


export default Routes;