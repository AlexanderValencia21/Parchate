import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://parchate-backend.onrender.com';

// Función para obtener todos los eventos
export const getEventos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/eventos?populate=*`);
    return response.data.data; // Strapi devuelve los datos dentro de "data"
  } catch (error) {
    console.error("Error obteniendo eventos:", error);
    return [];
  }
};

// Función para obtener un evento específico por ID
export const getEventoById = async (id: string | number) => {
  try {
    const response = await axios.get(`${BASE_URL}/eventos/${id}?populate=*`);
    return response.data.data; // Strapi devuelve los datos dentro de "data"
  } catch (error) {
    console.error(`Error obteniendo evento con ID ${id}:`, error);
    return null;
  }
};

// Función genérica para cualquier endpoint de Strapi
export const fetchFromAPI = async (endpoint: string, params = {}) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
};