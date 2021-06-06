import {useEffect, useContext} from 'react'
import {Context} from '../context/AuthContext';

const EmptyScreen = () => {
    const {isLogin} = useContext(Context);
    useEffect(() => { isLogin()}, [])
    return null
}

export default EmptyScreen

