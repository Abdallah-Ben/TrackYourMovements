import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const instance =  axios.create({
    baseURL : '' // here i've been using an given from the tool "ngrok" 
                // wich allows you to make "localhost" on a given prort available online 
})

instance.interceptors.request.use(
    async(config)=>{
        const token = await AsyncStorage.getItem('token');
        if (token) config.headers.Authorization = `bearer ${token}`
        return config;
    },
    (err)=> Promise.reject(err.data.message)
)

export default instance;