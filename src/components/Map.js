import React,{useContext} from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, {Polyline,Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';


const Map = () => {
    const {state : {currentLocation, locations}} = useContext(LocationContext)
     if(!currentLocation) return <ActivityIndicator  color ="#00ff00" style ={{marginTop : 100}} />
    return <MapView 
    style ={{height : 300}}
    initialRegion = {{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    region = {{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    >
        <Circle 
        center = {currentLocation.coords}
        radius = {50}
        strokeColor = 'rgba(158,158,255,1.0)'
        fillColor = 'rgba(158,158,255,0.3)'
        />
        <Polyline coordinates ={locations.map(loc => loc.coords)}/>
                </MapView>
}

export default Map

const styles = StyleSheet.create({})
