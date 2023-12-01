import axios from "axios";

export const api = axios.create({
    baseURL: "https://myfoodexplorer-api.onrender.com", 
    withCredentials: true
});