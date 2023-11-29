import axios from './axios.js'

export const getPostRequest = (idU) => axios.get('/posts', {
    params: {
        usuario_id: idU,
    },
})

export const postPostsRequest = (data) => axios.post('/posts', data)

export const getPlacesRequest = () => axios.get('/places')

export const getImgPlacesRequest = (idP) => axios.get('/images_places', {
    params: {
        lugar_id: idP,
    },
})