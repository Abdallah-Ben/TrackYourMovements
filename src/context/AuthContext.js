import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerAPI from '../API/tracker';

const authReducer = (state, action)=>{
    switch (action.type) {
        case 'add_error' : 
            return {...state, errorMessage : action.payload }
        case 'signup' : 
            return {...state, errorMessage : '', token : action.payload}
        case 'signin' : 
            return {...state, errorMessage : '', token : action.payload}
        case 'isLogin' : 
            return {...state, errorMessage : '', isLoading : false,  token : action.payload}
        case 'notLogin' : 
            return {...state, isLoading : false}
        case 'signout' : 
            return {...state, token : ''}
        case 'clearErrorMessage' : 
            return {...state, errorMessage : ''}
        default : 
            return state;
    }
}
const signup = (dispatch) => async ({email, password})=>{
       try {
           const response = await trackerAPI.post('/signup',{email, password});
           await  AsyncStorage.setItem('token', response.data.token);
            dispatch({type : 'signup', payload : response.data.token});
        } catch (e){
        dispatch ({type : 'add_error', payload : "Something went wrong"});
    }

    }

const signin = (dispatch) => async ({email, password})=>{
    try {
        const response = await trackerAPI.post('/signin',{email, password});
        await  AsyncStorage.setItem('token', response.data.token);
        dispatch({type : 'signin', payload : response.data.token});
    }catch(err){
        dispatch ({type : 'add_error', payload : "Something went wrong"});
    }
}

const signout = (dispatch) => async () =>{
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
}

const clearErrorMessage = (dispatch) => () => {
   dispatch({type :  'clearErrorMessage'})
}
const isLogin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch({type :  'isLogin', payload : token})
    else dispatch({type :  'notLogin'})
 }
 
 export const  { Provider, Context} = createDataContext(
     authReducer,
     {signin, signup, clearErrorMessage, isLogin, signout},
     {token : null , errorMessage : '', isLoading : true}
 )