import React, {useContext} from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements';
import {Context } from '../context/AuthContext'; 
import AuthComponent from '../components/AuthComponent';

const SignupScreen = ({navigation}) => {
    const {state , signup} = useContext(Context);
   return(
       <View style = {styles.container}>
        <AuthComponent 
            errorMessage={state.errorMessage} 
            func={signup} 
            title={'signup'} 
        />
        <TouchableOpacity 
            onPress = { ()=> navigation.navigate('signin')}>
            <Text style = {styles.title}>Already have an Account ? SignIn</Text>
        </TouchableOpacity>
        </View>
        )
        
}

export default SignupScreen
const styles = StyleSheet.create({
    title : {
        color : 'blue', 
        fontSize : 15, 
        marginVertical : 10,
        alignSelf : 'center'
    },
    container : {
        justifyContent : 'center',
        flex : 1,
        marginBottom : 50
    }
})