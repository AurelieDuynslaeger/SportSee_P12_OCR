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
    console.log('Type ID:', typeId, 'Translated Type:', translation);
    return translation || "Inconnu";
};



/**
 * Standardise les données utilisateur en un format uniforme.
 * @param {Object} userData - Données utilisateur brutes de l'API.
 * @returns {Object} - Données utilisateur standardisées.
 */

export const standardizeUserData = (userData) => {
    //vérifie si userData a une propriété data
    const data = userData.data ? userData.data : userData;
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
 * Standardise les données de performance en un format uniforme.
 * @param {Object} performanceData - Données de performance brutes.
 * @returns {Object} - Données de performance standardisées.
 */
export const standardizePerformanceData = (performanceData) => {

    console.log('Données brutes de performanceData dans standardizePerformanceData:', performanceData);
    //vérifie si performanceData a une propriété data
    const data = performanceData.data || performanceData;
    //si ce n'est pas le cas, la fonction tuiliser performanceData dans le format déjà correct
    return {
        //extrait userId et kind
        userId: data.userId,
        kind: data.kind,
        //transforme le tableau data en un format où chaque élément est un objet avec une valeur (value) et un type d'entraînement traduit (kind).
        data: data.data ? data.data.map(item => ({
            value: item.value,
            kind: translateTrainingType(item.kind)
        })) : []
    };
};
