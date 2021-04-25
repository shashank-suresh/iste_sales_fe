import * as api from '../api'
import { AUTH } from '../constants/actionTypes'

export const signin = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userData)

        dispatch({type: AUTH, data})

        history.push('/home')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(userData)
        
        dispatch({type: AUTH, data})

        history.push('/auth')
    } catch (error) {
        console.log(error)
    }
}