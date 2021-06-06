import React,{useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import {Context as TrackContext} from '../context/TrackContext'
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({route}) => {
    const {state} = useContext(TrackContext);
    const track = state.find(item => item._id === route.params?._id)
    const initialCoords = track.locations[1].coords

    return (
        <View>
            <MapView
                style = {styles.map} 
                initialRegion ={{
                 latitudeDelta: 0.01,
                 longitudeDelta: 0.01,
                ...initialCoords}}  >
                <Polyline coordinates ={track.locations.map(loc => loc.coords) } />
            </MapView>
        </View>
    )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
    map : {
        height : 500,
        width : 500
    }
})
