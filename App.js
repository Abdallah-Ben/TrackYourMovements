import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Context as AuthContext } from './src/context/AuthContext';
import {Context as TrackContext } from './src/context/TrackContext';
import {Feather,MaterialIcons, Ionicons} from '@expo/vector-icons';


import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackDetaiScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import EmptyScreen from './src/screens/EmptyScreen'
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';

const stack = createStackNavigator();
const bottomTab = createBottomTabNavigator();
const TrackList = ()=> {
  return (
   <stack.Navigator> 
    <stack.Screen name="TrackList" component={TrackListScreen}/>
    <stack.Screen name="TrackDetail" component={TrackDetaiScreen}/>
  </stack.Navigator>
  )  
}

const App = ()=> {
  const {state, clearErrorMessage } = useContext(AuthContext);
  const {fetchTrack} = useContext(TrackContext);
  return  (    
    <NavigationContainer>
        { (state.isLoading ) ?
          <EmptyScreen/>
        :(state.token && !state.isLoading) ? 
         <bottomTab.Navigator>
          <bottomTab.Screen name="Tracks" listeners ={{focus: fetchTrack}} options = {{tabBarIcon : ()=><Ionicons name="list-circle-outline" size={24} color="black" />
}} component ={TrackList}/>
          <bottomTab.Screen name="Add track" options = {{tabBarIcon : ()=><Feather name="plus-square" size={24} color="black" />}} component={TrackCreateScreen}/>
          <bottomTab.Screen name="Account" options = {{tabBarIcon : ()=><MaterialIcons name="account-circle" size={24} color="black" />
}} component={AccountScreen}/>
        </bottomTab.Navigator>
        : 
        (<stack.Navigator initialRouteName="signin">  
          <stack.Screen name="signin" listeners = {{focus: clearErrorMessage }} component={SigninScreen} options = {{headerShown : false}}    />
          <stack.Screen name="signup" listeners = {{focus: clearErrorMessage }} component={SignupScreen} options = {{headerShown : false}}  />  
        </stack.Navigator>) 
        } 
    </NavigationContainer>
    ) 
}
export default ()=>{
  return (
  <TrackProvider>
   <LocationProvider> 
    <AuthProvider>
      <App/>
    </AuthProvider>
   </LocationProvider>
  </TrackProvider>)
}
