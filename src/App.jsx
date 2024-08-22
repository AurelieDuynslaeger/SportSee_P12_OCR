import { useEffect, useState } from 'react';
//components
import LeftNav from './components/LeftNav/LeftNav'
import TopNav from './components/TopNav/TopNav'
import CustomTooltip from './components/CustomTooltip';
import UserNutritionCard from './components/UserNutritionCard/UserNutritionCard';

//config nutrition cards (color, icons, bg color etc..)
import { NUTRITION_CONFIG } from './config/nutritionConfig';

//react-icons
import { BsDot } from "react-icons/bs";
import { FaFire, FaDrumstickBite, FaAppleAlt, FaHamburger } from 'react-icons/fa';

//stylesheet
import './stylesheet/App.scss'

//recharts components
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis,RadialBarChart, RadialBar, LineChart, Line } from 'recharts';

import { fetchUserMainData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from './api/apiService';

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

  const userId = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mainData = await fetchUserMainData(userId);
        const activityData = await fetchUserActivity(userId);
        const averageSessionsData = await fetchUserAverageSessions(userId);
        const performanceData = await fetchUserPerformance(userId);

        setUserData(mainData);
        setUserActivity(activityData);
        setUserAverageSessions(averageSessionsData);
        setUserPerformance(performanceData);
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
    subject : userPerformance.kind[item.kind],
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
        <div className="user_daily_activity">
          <div className='daily_activity_header'>
            <h2>Activité Quotidienne</h2>
            <div className='weight_kcal'>
              <div className='weight'>
                <BsDot className='weight_dot'/>
                <p>Poids (kg)</p>
              </div>
              <div className='kcal'>
              <BsDot className='kcal_dot'/>
                <p>Calories brûlées (kCal)</p>
              </div>
            </div>
          </div>
          <div className='daily_activity_barchart'>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                data={userActivity.sessions}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                  <XAxis dataKey="day" tickFormatter={(value, index) => index + 1} />
                  <Tooltip content={<CustomTooltip />}/>
                  <Bar dataKey="kilogram" fill='#020203' barSize={8} radius={[10, 10, 0, 0]}/>
                  <Bar dataKey="calories" fill='#FF0101'barSize={8} radius={[10, 10, 0, 0]}/>
                </BarChart>
              </ResponsiveContainer>
          </div>
        </div>
        <div className="user_sessions_length">
          <h3>Durée moyenne des sessions</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={userAverageSessions.sessions}
              margin={{
                top: 0,
                left: 5,
                right: 5,
              }}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tickFormatter={(tick) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][tick - 1]}
                tick={{ fill: '#ffffff99', fontSize: 12 }}
              />
              <Tooltip/>
              <Line
                type="monotone"
                dataKey="sessionLength"
                stroke="#FFFFFF"
                dot={false}
                activeDot={{ r: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>    
        </div>
        <div className="user_radar_graph">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radar_data}>
              <PolarGrid radialLines={false}/>
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 10 }}/>
              <Radar name="Mike" dataKey="value" fill="#ff01014d"/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="user_score">
          <h3>Score</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="70%" 
              outerRadius="80%" 
              barSize={10} 
              data={score_data}
              startAngle={90}
              endAngle={90 + 360 * (score_data[0].uv / 100)}
            >
              <RadialBar
                background={{ fill: '#f5f5f5' }}
                clockWise
                dataKey="uv"
                cornerRadius={10}
                fill={score_data[0].fill}
              />
              <text 
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="progress-label"
              >
                <tspan
                  x="50%"
                  dy="-0.5em" 
                  fontSize="24"
                  fontWeight="bold"
                  fill="#000"
                >
                  {`${score_data[0].uv}%`}
                </tspan>
                <tspan
                  x="50%"
                  dy="1.5em" 
                  fontSize="1.2rem"
                  fill="#a9a9a9" 
                  className="obj_text"
                >
                  de votre objectif
                </tspan>
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
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
