import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/routes",
    withCredentials: true
})

export default instance;