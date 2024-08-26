import { useEffect, useState } from 'react';
import LeftNav from './components/LeftNav/LeftNav'
import TopNav from './components/TopNav/TopNav'
import DailyActivityBarchart from './components/DailyActivityBarchart/DailyActivityBarchart';
import UserNutritionCard from './components/UserNutritionCard/UserNutritionCard';
import SessionsLenghtLinechart from './components/SessionsLenghtLinechart/SessionsLenghtLinechart';
import RadarGraphPerf from './components/RadarGraphPerf/RadarGraphPerf';
import ScoreRadialBarchart from './components/ScoreRadialBarchart/ScoreRadialBarchart';
import { FaFire, FaDrumstickBite, FaAppleAlt, FaHamburger } from 'react-icons/fa';
import './stylesheet/App.scss'

//data services
import { fetchUserMainData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from './api/apiService';
//data standardisation
import { standardizePerformanceData, standardizeUserData, standardizeActivityData, standardizeAverageSessionsData } from './utils/utils';

//config nutrition cards (color, icons, bg color etc..)
import { NUTRITION_CONFIG } from './config/nutritionConfig';
//icons for NUTRITION_CONFIG
const ICONS = {
  FaFire,
  FaDrumstickBite,
  FaAppleAlt,
  FaHamburger
};

function App() {

  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const userId = 18;

  useEffect(() => {
    const fetchData = async () => {
      try {
      //fetch des données brutes (api ou mock)
      const mainDataResponse = await fetchUserMainData(userId);
      const activityDataResponse = await fetchUserActivity(userId);
      const averageSessionsDataResponse = await fetchUserAverageSessions(userId);
      const performanceDataResponse = await fetchUserPerformance(userId);

      //standardisation des données avant de setter le state
      const standardizedUserData = standardizeUserData(mainDataResponse);
      const standardizedActivityData = standardizeActivityData(activityDataResponse);
      const standardizedAverageSessionsData = standardizeAverageSessionsData(averageSessionsDataResponse);
      const standardizedPerformanceData = standardizePerformanceData(performanceDataResponse);

      setUserData(standardizedUserData);
      setUserActivity(standardizedActivityData);
      setUserAverageSessions(standardizedAverageSessionsData);
      setUserPerformance(standardizedPerformanceData);
      } catch (error) {
        console.error("Erreur lors du chargement des données", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userData || !userActivity || !userAverageSessions || !userPerformance) {
    return <div>Loading...</div>;
  }

  //doc recharts subject et value pour le radar graph
  //obtenir le label correspondant (compatibles avec Recharts)
  const radar_data = userPerformance.data.map(item => ({
    subject : item.subject,
    value: item.value
  }));


  //simple radial bar chart pour le score
  const score_data = [{
    name: 'Score',
    uv: userData.todayScore * 100,
    fill: '#ff0101'
    }
  ]

  return (
    <>
      <TopNav/>
      <LeftNav/>
      <div className='main_content'>
        <div className='user_header'>
          <h1>Bonjour <span className='user_first_name'>{userData.userInfos.firstName}</span></h1>
          <p>Félicitations ! Vous avez explosé vos objectifs d&apos;hier !</p>
        </div>

        <DailyActivityBarchart userActivitySessions={userActivity.sessions}/>

        <SessionsLenghtLinechart userAverageSessions={userAverageSessions.sessions} />
       
        <RadarGraphPerf radarData={radar_data}/>

        <ScoreRadialBarchart scoreData={score_data}/>

        <div className="user_nutrition">
        {/* <UserNutritionCard 
            icon={<FaFire />} 
            iconColor="#ff0101"
            bgcolor="#FF00000D" 
            label="Calories" 
            value={userData.keyData.calorieCount} 
            unit="kCal" 
          />
          <UserNutritionCard 
            icon={<FaDrumstickBite />} 
            iconColor="#4ab8ff"
            bgcolor="#4ab8ff1a" 
            label="Protéines" 
            value={userData.keyData.proteinCount} 
            unit="g" 
          />
          <UserNutritionCard 
            icon={<FaAppleAlt />} 
            iconColor="#FDCC0C"
            bgcolor="#F9CE231A" 
            label="Glucides" 
            value={userData.keyData.carbohydrateCount} 
            unit="g" 
          />
          <UserNutritionCard 
            icon={<FaHamburger />} 
            iconColor="#FD5181"
            bgcolor="#fd51811a" 
            label="Lipides" 
            value={userData.keyData.lipidCount} 
            unit="g" 
          /> */}
          {Object.keys(NUTRITION_CONFIG).map(key => {
                const { icon, iconColor, bgcolor, label, unit } = NUTRITION_CONFIG[key];
                const IconComponent = ICONS[icon];

                return (
                    <UserNutritionCard 
                        key={key}
                        icon={<IconComponent />}
                        iconColor={iconColor}
                        bgcolor={bgcolor}
                        label={label}
                        value={userData.keyData[key]}
                        unit={unit}
                    />
                );
            })}
        </div>
      </div>
    </>
  )
}

export default App
