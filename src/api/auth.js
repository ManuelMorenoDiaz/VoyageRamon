import axios from './axios.js'

export const registerRequest = (user) => axios.post('/register', user)

export const loginRequest = (user) => axios.post('/login', user)

export const logOutRequest = () => axios.post('/logout')

export const verifyTokenRequest = () => axios.get('/verify')

export const getUsersRequest = () => axios.get('/users')