import axios from './axios.js'

// Peticiones para publicaciones
export const getPostRequest = () => axios.get('/posts')

export const postPostsRequest = (data) => axios.post('/posts', data)

export const getPlacesRequest = () => axios.get('/places')

export const getImgPlacesRequest = (idP) => axios.get('/images_places', {
    params: {
        lugar_id: idP,
    },
})