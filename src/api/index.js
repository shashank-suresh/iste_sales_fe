import axios from 'axios'

const API = axios.create({ baseURL: 'https://sales-website-project.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const fetchProducts = () => API.get('/products')
export const fetchProductsByTag = (tag) => API.get(`/products/tags?tags=${tag}`)
export const createProduct = (newProduct) => API.post('/products', newProduct)

export const signIn = (userData) => API.post('/user/signin', userData)
export const signUp = (userData) => API.post('/user/signup', userData)