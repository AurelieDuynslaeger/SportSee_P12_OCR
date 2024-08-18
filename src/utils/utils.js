// Dictionnaire pour la traduction des types d'entraînement
const trainingTypeTranslations = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité"
};

/**
 * Traduit le type d'entraînement à partir d'un ID.
 * @param {number} typeId - ID du type d'entraînement.
 * @returns {string} - Nom du type d'entraînement traduit.
 */
export const translateTrainingType = (typeId) => {
    return trainingTypeTranslations[typeId] || "Inconnu";
};



/**
 * Standardise les données utilisateur en un format uniforme.
 * @param {Object} userData - Données utilisateur brutes de l'API.
 * @returns {Object} - Données utilisateur standardisées.
 */
export const standardizeUserData = (userData) => {
    return {
        id: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        age: userData.age,
        //standardiser les noms de propriétés (score todayScore = todayScore)
        todayScore: userData.todayScore || userData.score,
        keyData: userData.keyData
    };
};