import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import {useState, useEffect} from 'react';
export default (callback, shouldTrack,trackingUser) =>{
    const [err, setErr] = useState(null);
    useEffect(() => {
        let subscriber;
        const startWatching = async ()=>{
            const response = await requestPermissionsAsync();
            if (response.status === 'denied') setErr(response.status) 
            subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval : 10,
            }, callback );
               }
        if ((shouldTrack || trackingUser) && subscriber) {
            subscriber.remove(); startWatching();
        } 
        else if (shouldTrack || trackingUser) {
            startWatching();
        } 
        return ()=>{
            if (subscriber) subscriber.remove();
        }
        
    }, [shouldTrack,trackingUser]);

return [err];
}