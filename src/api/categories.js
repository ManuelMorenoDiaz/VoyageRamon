import axios from './axios.js'

export const getCategoriesRequest = () => axios.get('/categories')

export const getCategoryRequest = (idC) => axios.get(`/categories/${idC}`)