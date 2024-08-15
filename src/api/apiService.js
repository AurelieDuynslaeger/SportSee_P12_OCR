import axios from 'axios';

//URL de base pour les appels API
const API_URL = 'http://localhost:3000/user';

//récup des données principales de l'utilisateur
export const fetchUserMainData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur de récupération des données de l'utilisateur", error);
        throw error;
    }
};

//récup les données d'activité de l'utilisateur
export const fetchUserActivity = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}/activity`);
        return response.data;
    } catch (error) {
        console.error("Erreur de récupération des données de l'activité de l'utilisateur", error);
        throw error;
    }
};

//récup les sessions moyennes de l'utilisateur
export const fetchUserAverageSessions = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}/average-sessions`);
        return response.data;
    } catch (error) {
        console.error("Erreur de récupération des données de sessions l'utilisateur", error);
        throw error;
    }
};

//récup la performance de l'utilisateur
export const fetchUserPerformance = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}/performance`);
        return response.data;
    } catch (error) {
        console.error("Erreur de récupération des données de performance de l'utilisateur", error);
        throw error;
    }
};
