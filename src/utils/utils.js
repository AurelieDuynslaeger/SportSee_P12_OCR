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
    const translation = trainingTypeTranslations[typeId];
    console.log(`Traduction pour typeId ${typeId}: ${translation}`);
    return translation || "Inconnu";
};


/**
 * Standardise les données utilisateur en un format uniforme.
 * @param {Object} userData - Données utilisateur brutes de l'API.
 * @returns {Object} - Données utilisateur standardisées.
 */

export const standardizeUserData = (userData) => {
    //vérifie si userData a une propriété data
    const data = userData.data || userData;
    return {
        id: data.id,
        userInfos: {
            firstName: data.userInfos.firstName,
            lastName: data.userInfos.lastName,
            age: data.userInfos.age
        },
        //standardiser les noms de propriétés (score todayScore = todayScore)
        todayScore: data.todayScore || data.score,
        keyData: {
            calorieCount: data.keyData.calorieCount,
            proteinCount: data.keyData.proteinCount,
            carbohydrateCount: data.keyData.carbohydrateCount,
            lipidCount: data.keyData.lipidCount
        }
    };
};

/**
 * Standardise les données d'activité en un format uniforme.
 * @param {Object} activityData - Données d'activité brutes.
 * @returns {Object} - Données d'activité standardisées.
 */
export const standardizeActivityData = (activityData) => {
    const { sessions } = activityData.data || activityData;

    return {
        sessions: Array.isArray(sessions) ? sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        })) : []
    };
};

/**
 * Standardise les données des sessions moyennes en un format uniforme.
 * @param {Object} averageSessionsData - Données des sessions moyennes brutes.
 * @returns {Object} - Données des sessions moyennes standardisées.
 */
export const standardizeAverageSessionsData = (averageSessionsData) => {
    const { sessions } = averageSessionsData.data || averageSessionsData;

    return {
        sessions: Array.isArray(sessions) ? sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength
        })) : []
    };
};

/**
 * Standardise les données de performance en un format uniforme.
 * @param {Object} performanceData - Données de performance brutes.
 * @returns {Object} - Données de performance standardisées.
 */
export const standardizePerformanceData = (performanceData) => {
    //condition pour gérer le cas où les données sont imbriquées sous la clé `data`
    const performance = performanceData.data || performanceData;

    //vérification si la structure des données est correcte
    if (!performance || !performance.data || !performance.kind) {
        return { userId: undefined, kind: undefined, data: [] };
    }

    const { data, kind, userId } = performance;

    const standardizedData = data.map(item => ({
        value: item.value,
        subject: translateTrainingType(item.kind) || 'Unknown'
    }));

    return { userId, kind, data: standardizedData };
};

