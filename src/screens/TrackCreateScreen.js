import '../_mockLocation'
import React,{useContext, useState} from 'react'
import {useIsFocused} from '@react-navigation/native'
import { StyleSheet,  } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, Input, Button } from 'react-native-elements';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
const TrackCreateScreen = ({navigation}) => {
    const isFocused = useIsFocused();
    const {state : {name, recording,locations}, addLocation,startRecording,changeName,stopRecording} = useContext(LocationContext);
    const [err] = useLocation((location)=>{
        addLocation(location,recording)},isFocused,recording);
    const [saveTrack] = useSaveTrack();
    return (
        <SafeAreaView>
            <Text h2>TrackListScreen </Text>
            <Map/>
            {err ? <Text>Please enable Location services</Text> : null}
            <Input placeholder ="Enter name " value ={name} onChangeText = {changeName}></Input>
            {recording ? <Button 
                type = 'solid' 
                title = "Stop" 
                onPress = {()=> stopRecording()} />
            :
            <Button 
                type = 'solid' 
                title = "Start Recording" 
                onPress = {()=> { (!name)   ? alert('enter a name') : startRecording() }} /> 
            }
            {
                !recording && locations.length ? <Button title = "Save Recording" onPress ={()=>saveTrack(navigation)} /> : null
            }
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
