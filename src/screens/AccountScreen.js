import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Context} from '../context/AuthContext'

const AccountScreen = () => {
    const {signout} = useContext(Context);
    return (
        <SafeAreaView >
            <Text > AccountScreen </Text>
            <Button title = 'Sign out' onPress = {signout}/>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    
})
