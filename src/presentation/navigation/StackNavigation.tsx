import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import ProductScreen from '../screens/product/ProductScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  LoadingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProductScreen: { productId: string };
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        // forma global
        // cardStyleInterpolator: fadeAnimation,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ cardStyleInterpolator: fadeAnimation }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ cardStyleInterpolator: fadeAnimation }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ cardStyleInterpolator: fadeAnimation }}
      />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}
