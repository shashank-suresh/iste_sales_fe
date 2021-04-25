import { FETCH_ALL, CREATE, FETCH_BY_TAG } from '../constants/actionTypes'

export default (products = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...products, action.payload]
        case FETCH_BY_TAG:
            return action.payload
        default:
            return products
    }
}