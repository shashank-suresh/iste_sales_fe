import * as api from '../api'
import { CREATE, FETCH_ALL, FETCH_BY_TAG } from '../constants/actionTypes'

export const getProducts = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchProducts()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getProductsByTag = (tag) => async (dispatch) => {
    try {
        const { data } = await api.fetchProductsByTag(tag)

        dispatch({ type: FETCH_BY_TAG, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}