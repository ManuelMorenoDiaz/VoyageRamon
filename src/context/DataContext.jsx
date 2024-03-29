import { createContext, useState, useContext } from "react";
import { getPlacesRequest, getPlaceRequest } from "../api/places";
import {
  getHotelRequest,
  getHotelsRequest,
  getImgHotelsRequest,
} from "../api/hotels";
import { getCategoriesRequest, getCategoryRequest } from "../api/categories";

import { getUsersRequest } from "../api/auth";
import { getPostRequest, getImgPlacesRequest } from "../api/travels";
import { useAuth } from "./authContext";

const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const { user } = useAuth();
  const [places, setPlaces] = useState([]);
  const [placesByCategory, setPlacesByCategory ]=useState([]);
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userPostsData, setUserPostsData]=useState([]);
  const [personas, setPersonas] = useState([]);
  const [placeL, setPlaceL]=useState([]);
  const [lal, setLal] = useState([]);
  const [imga, setImg] = useState();
  const [categories, setCategories]=useState([]);
  const [category, setCategory]=useState([]);


  const fetchPlaces = async (idC) => {
    if(idC){
      try{
      let response = await getPlacesRequest(idC);
      setPlacesByCategory(response.data);
      }catch (error) {
        console.log("Error fetching places by category:", error);
      }
    }else{
      try {
        const response = await getPlacesRequest();
        setPlaces(response.data);
      } catch (error) {
        console.log("Error fetching places:", error);
      }
    }
  };

  const fetchPlace = async (idP) => {
    try {
      const response = await getPlaceRequest(idP);
      setPlaceL(response.data)
      
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async (idU) => {
    if(idU){
      // console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuu ' + idU);
      try {
        const response = await getPostRequest(idU);
        // console.log('ttttttttttttttttttttttttttttt');
        // console.log(response.data);
        setUserPostsData(response.data);
        } catch (error) {
          console.log("Error fetching user posts: ", error);
          }
    }else{
      try {
        const response = await getPostRequest();
        const usuario = response.data.filter(
          (post) => post.usuario_id._id === user._id
        );
  
        const noUsuario = response.data.filter(
          (post) => post.usuario_id._id != user._id
        );
  
        setUserPosts(usuario);
        setPosts(noUsuario);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    }
    
  };

  const fetchHotels = async (idP) => {
    try {
      const response = await getHotelsRequest(idP);
      setHotels(response.data);
    } catch (error) {
      console.log("Error fetching hotels:", error);
    }
  };

  const fetchHotel = async (idH) => {
    try {
      const response = await getHotelRequest(idH);
      setHotel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPersonas = async () => {
    try {
      const response = await getUsersRequest();
      setPersonas(response.data);
    } catch (error) {
      console.error("Error al obtener las personas:", error);
    }
  };

  const fetchLal = async (idP) => {
    try {
      const response = await getImgPlacesRequest(idP);
      setLal(response.data);
      setImg(response.data[0].id_imagen.imagen_link);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchImagesHotels = async (idH) => {
    try {
      const response = await getImgHotelsRequest(idH);
      setLal(response.data);
      setImg(response.data[2].id_imagen.imagen_link);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategoriesRequest();
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  const fetchCategory = async (idC) => {
    try {
      const response = await getCategoryRequest(idC);
      setCategory(response.data);
    } catch (error) {
      console.log("Error fetching category:", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        places,
        placeL,
        posts,
        userPosts,
        userPostsData,
        hotels,
        hotel,
        personas,
        lal,
        imga,
        categories,
        category,
        placesByCategory,
        fetchPlaces,
        fetchPlace,
        fetchHotels,
        fetchHotel,
        fetchPersonas,
        fetchLal,
        fetchImagesHotels,
        fetchPosts,
        fetchCategories,
        fetchCategory
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
