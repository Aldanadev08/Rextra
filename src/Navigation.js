import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Add from "./screens/Add";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}  
      />
      {/* ¡Añade esta pantalla! */}
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} // Opcional: oculta el header
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Add" 
        component={Add} 
        options={{ presentation: 'modal' }} 
      />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPassword} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}