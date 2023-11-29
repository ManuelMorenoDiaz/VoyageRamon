import axios from './axios.js'

export const getPostRequest = (idU) => axios.get('/posts', {
    params: {
        usuario_id: idU,
    },
})

export const postPostsRequest = (data) => axios.post('/posts', data)

export const getOnePost = (data) => axios.get(`/posts/${data}`)

export const updatePostsRequest = (id, data) => axios.put(`/posts/${id}`, data);

export const getPlacesRequest = () => axios.get('/places')

export const getImgPlacesRequest = (idP) => axios.get('/images_places', {
    params: {
        lugar_id: idP,
    },
})

export const DeleteImgPlacesRequest = (_id) => axios.delete(`/images_places/${_id}`)

export const getImgHotelsRequest = (idH) => axios.get('/images_hotels', {
    params: {
        id_hotel: idH,
    },
})

export const DeleteImgHotelsRequest = (_id) => axios.delete(`/images_hotels/${_id}`)