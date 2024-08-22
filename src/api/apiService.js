import axios from 'axios';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/mockData';

// URL de base pour les appels API
const API_URL = 'http://localhost:3000/user';

//détermine si utilisation de l'API ou les données mockées
const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export const fetchUserMainData = async (userId) => {
    if (useMockData) {
        return USER_MAIN_DATA.find(user => user.id === userId);
    } else {
        try {
            const response = await axios.get(`${API_URL}/${userId}`);
            return response.data;
        } catch (error) {
            console.error("Erreur de récupération des données de l'utilisateur", error);
            throw error;
        }
    }
};

export const fetchUserActivity = async (userId) => {
    if (useMockData) {
        return USER_ACTIVITY.find(activity => activity.userId === userId);
    } else {
        try {
            const response = await axios.get(`${API_URL}/${userId}/activity`);
            return response.data;
        } catch (error) {
            console.error("Erreur de récupération des données de l'activité de l'utilisateur", error);
            throw error;
        }
    }
};

export const fetchUserAverageSessions = async (userId) => {
    if (useMockData) {
        return USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === userId);
    } else {
        try {
            const response = await axios.get(`${API_URL}/${userId}/average-sessions`);
            return response.data;
        } catch (error) {
            console.error("Erreur de récupération des données de sessions l'utilisateur", error);
            throw error;
        }
    }
};

export const fetchUserPerformance = async (userId) => {
    if (useMockData) {
        return USER_PERFORMANCE.find(performance => performance.userId === userId);
    } else {
        try {
            const response = await axios.get(`${API_URL}/${userId}/performance`);
            return response.data;
        } catch (error) {
            console.error("Erreur de récupération des données de performance de l'utilisateur", error);
            throw error;
        }
    }
};
