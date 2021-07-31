import React, { Component, Profiler } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Animated
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import SignUp from './src/SignUp';
import Login from './src/Login';
import AccountDetials from './src/AccountDetials';
import ProfileScreen from './src/ProfileScreen';
import PaymentMethod from './src/PaymentMethod';
import Address from './src/Address';
import Order from './src/Order';
import Cart from './src/Cart';
import ProductDetails from './src/ProductDetails';
import ProductCategory from './src/ProductCategory';
import Feedback from './src/Feedback';
import Aboutus from './src/Aboutus';
// import Map from './src/Map';


import Productlistwithfilter from './src/Productlistwithfilter';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';

import { Header } from "react-native/Libraries/NewAppScreen";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



function StackHome({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Webview_InformationSecurity}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {

  return (
    
    <Drawer.Navigator
    drawerStyle={{ width: windowWidth,
     }}
     drawerPosition='right'
      drawerContentOptions={{
        activeBackgroundColor: '#FFFFFF',
      }}
      >
       <Drawer.Screen
        name="login"
        options={{
           drawerLabel: 'login'

        }}
        
        component={StackHome} />
      
      
    </Drawer.Navigator >
  );
}



function MyStack() {
  return (

    <Stack.Navigator
      screenOptions={{
        title: false,
        headerBackTitleVisible: false,
        headerShown: false,

      }}>
        
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen
        options={{
          title: 'SIGN UP',
          headerTintColor: 'red'
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails}/>

      <Stack.Screen name="AccountDetials" component={AccountDetials} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Stack.Screen name="PaymentMethod" component={PaymentMethod}/>
      <Stack.Screen name="Address" component={Address}/>
      <Stack.Screen name="Order" component={Order}/>
      <Stack.Screen name="Cart" component={Cart}/>
      <Stack.Screen name="ProductCategory" component={ProductCategory}/>
      <Stack.Screen name="Feedback" component={Feedback}/>
      <Stack.Screen name="Aboutus" component={Aboutus}/>
      <Stack.Screen name="Productlistwithfilter" component={Productlistwithfilter}/>
      {/* <Stack.Screen name="Map" component={Map}/> */}

    </Stack.Navigator>
  );
}



// Drawer

// function LoginScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Signup')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();


function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};


export default App;
