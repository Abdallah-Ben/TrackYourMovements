import React,{useContext} from 'react'
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import {ListItem} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';
const TrackListScreen = ({navigation}) => {
    const {state} = useContext(TrackContext);
    return (
        <>
            <FlatList
            data = {state}
            keyExtractor = {item => item._id}
            renderItem = {({item})=>{
                return <TouchableOpacity onPress={()=>navigation.navigate('TrackDetail',{_id : item._id})} >
                    <ListItem bottomDivider >
                     <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                    </ListItem>  
                </TouchableOpacity>
            }}
            />
        </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
