import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements';

const AuthComponent = ({title, errorMessage, func}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <>
        <Text style = {styles.title} h1> {title}</Text>
        <Input 
            style = {styles.margin} 
            label ="Email" 
            value = {email} 
            onChangeText = {setEmail} 
            autoCapitalize = 'none' 
            autoCorrect = {false}  />
        <Input 
            style = {styles.margin} 
            label ="Password" 
            value = {password} 
            onChangeText = {setPassword} 
            autoCapitalize = 'none' 
            autoCorrect = {false} 
            secureTextEntry />
        {errorMessage ? <Text style = {styles.errorMessagage}>{errorMessage}</Text> : null}
        <Button 
            buttonStyle = {styles.button} 
            type="solid"
            title ={title} 
            onPress = {()=> func({email, password})}/>
        
    </>
    )
}

export default AuthComponent

const styles = StyleSheet.create({
    title : {
        marginVertical : 10,
        alignSelf : 'center',
        color : 'brown'
    },
    signupButton : {
        borderWidth : 1,
        borderColor : 'red',
    },
    margin : {
        marginVertical : 10
    },
    button : {
        marginVertical : 10,
        width : 250,
        alignSelf : 'center',  
    },
    container : {
        justifyContent : 'center',
        flex : 1,
        marginBottom : 50
    },
    errorMessagage: {
        marginVertical : 10,
        color : 'red',
        fontSize : 15,
        alignSelf : 'center',
    }
})
