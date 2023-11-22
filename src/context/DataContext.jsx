import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel]=useState([]);
  const [personas, setPersonas]=useState([]);
  const [place, setIPlaces] = useState({});
  const [lal, setLal] = useState([]);
  const [imga, setImg]=useState();

  const fetchPlaces = async () => {
    try {
      const response = await axios.get("http://localhost:3000/places/");
      setPlaces(response.data);
    } catch (error) {
      console.log('Error fetching places:', error);
    }
  };

  const fetchHotels = async (idP) => {
    try {
      const response = await axios.get('http://localhost:3000/hotels/', {
        params: {
          lugar_id: idP,
        },
      });
      setHotels(response.data);
    } catch (error) {
      console.log('Error fetching hotels:', error);
    }
  };

  const fetchHotel=async(idH)=>{
    try{
      const response= await axios.get(`http://localhost:3000/hotels/${idH}`)
      setHotel(response.data);
    }catch (error){
      console.log(error);
    }
  }

  const fetchPersonas=async()=>{
    try{
      const response = await axios.get("http://localhost:3000/users/");
      setPersonas(response.data);
    }
    catch(error){
      console.error("Error al obtener las personas:", error);
    }
  }

  const fetchLal = async (idP) => {
    try {
      const response = await axios.get(`http://localhost:3000/images_places/`, {
        params: {
          lugar_id: idP,
        },
      });
      setLal(response.data);
      setIPlaces(response.data[0].id_lugar);
      setImg(response.data[0].id_imagen.imagen_link);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchImagesHotels=async(idH)=>{
    try{
      const response = await axios.get(`http://localhost:3000/images_hotels/`, {
        params: {
          hotel_id: idH,
        },
      });
        setLal(response.data)
        setImg(response.data[2].id_imagen.imagen_link);

        console.log('eeeeeeeeeeeeeeeeeee');
        console.log(response.data[0].id_imagen.imagen_link);
    }catch(error){
      console.log(error);
    }
  }


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
        fetchImagesHotels
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
