import axios from './axios.js'

export const getHotelsRequest = (idP) => axios.get('/hotels', {
    params: {
        lugar_id: idP,
    },
})

export const getHotelRequest = (idH) => axios.get(`/hotels/${idH}`)

export const getImgHotelsRequest = (idH) => axios.get('/images_hotels', {
    params: {
        hotel_id: idH,
    },
})