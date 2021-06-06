
import tracker from '../API/tracker';
import createDataContext from './createDataContext';

const trackReducer = (state, action)=>{
    switch (action.type) {
        case 'fetch_locations' :
            return action.payload 
        default : 
        return state;
    }
}

const createTrack = dispatch => async (name, locations)=>{
    try{
        await tracker.post('/tracks', {name, locations})
    }catch(e){
        console.log(e.message);
    }
};
const fetchTrack = dispatch => async()=> {
    const response = await tracker.get('/tracks');
    dispatch({type : 'fetch_locations', payload : response.data})
};

export const {Context, Provider} = createDataContext(
    trackReducer,
    {createTrack, fetchTrack},
    []
)