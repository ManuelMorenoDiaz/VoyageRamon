import axios from './axios.js'

export const getPostRequest = () => axios.get('/posts')

export const getPlacesRequest = () => axios.get('/places')

export const getImgPlacesRequest = (idP) => axios.get('/images_places', {
    params: {
        lugar_id: idP,
    },
})