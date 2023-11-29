import axios from './axios.js'

export const getUser_PostRequest = (id) => axios.get('/users_post', {
    params: id
})

export const postUser_PostsRequest = (data) => axios.post('/users_post', data)

export const deleteUser_PostRequest = (id) => axios.delete(`/users_post/${id}`)

export const updateUser_PostRequest = (id, data) => axios.put(`/users_post/${id}`, data)