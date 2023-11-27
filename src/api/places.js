import axios from './axios.js';

export const getPlacesRequest = (idC) => axios.get('/places', {
    params: {
        categoria_id: idC,
    },
})

export const getPlaceRequest = (idP) => axios.get(`/places/${idP}`)


export const deletePlace = (idP) => axios.delete(`/places/${idP}`);

export const updatePlace = (idP, data) => axios.put(`/places/${idP}`, data);