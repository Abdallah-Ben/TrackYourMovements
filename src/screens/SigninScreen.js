import React,{useContext} from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements';
import {Context } from '../context/AuthContext'; 
import AuthComponent from '../components/AuthComponent';
const SigninScreen = ({navigation}) => {
    const {state , signin,clearErrorMessage} = useContext(Context);

    return (
        <View style = {styles.container}>
            <AuthComponent 
              errorMessage={state.errorMessage} 
              func={signin} 
              title={'signin'} 
            />
            <TouchableOpacity 
            onPress = { ()=> navigation.navigate('signup')}>
            <Text style = {styles.title}>You don't have an Account ? SignUp</Text>
        </TouchableOpacity>
        </View>
            )
}

export default SigninScreen
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