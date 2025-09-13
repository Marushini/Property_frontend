// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://property-backend-o26n.onrender.com/api", 
});

// Automatically attach token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
