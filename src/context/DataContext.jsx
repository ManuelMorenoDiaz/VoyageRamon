import { createContext, useState, useContext } from "react";
import { getImgPlacesRequest, getPlacesRequest } from "../api/travels";
import {
  getHotelRequest,
  getHotelsRequest,
  getImgHotelsRequest,
} from "../api/hotels";
import { getUsersRequest } from "../api/auth";

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
  const [places, setPlaces] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [place, setIPlaces] = useState({});
  const [lal, setLal] = useState([]);
  const [imga, setImg] = useState();

  const fetchPlaces = async () => {
    try {
      const response = await getPlacesRequest();
      setPlaces(response.data);
    } catch (error) {
      console.log("Error fetching places:", error);
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
      setIPlaces(response.data[0].id_lugar);
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
      console.log("eeeeeeeeeeeeeeeeeee");
      console.log(response.data[0].id_imagen.imagen_link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        places,
        hotels,
        hotel,
        personas,
        place,
        lal,
        imga,
        fetchPlaces,
        fetchHotels,
        fetchHotel,
        fetchPersonas,
        fetchLal,
        fetchImagesHotels,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
