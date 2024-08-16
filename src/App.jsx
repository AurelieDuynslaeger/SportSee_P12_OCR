
import LeftNav from './components/LeftNav/LeftNav'
import TopNav from './components/TopNav/TopNav'
import CustomTooltip from './components/CustomTooltip';
import { BsDot } from "react-icons/bs";
import './stylesheet/App.scss'

//mock datas
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mocks/mockData';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis,RadialBarChart, RadialBar, LineChart, Line } from 'recharts';

function App() {

  const userData = USER_MAIN_DATA.find(user => user.id === 12);
  const userActivity = USER_ACTIVITY.find(activity => activity.userId === 12);
  const userAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === 12);
  const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === 12);

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
                width={500}
                height={350}
                data={userActivity.sessions}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                  <YAxis/>
                  <XAxis dataKey="day"/>
                  <Tooltip content={<CustomTooltip />}/>
                  <Bar dataKey="kilogram" fill='#020203'/>
                  <Bar dataKey="calories" fill='#FF0101'/>
                </BarChart>
              </ResponsiveContainer>
          </div>
        </div>
        <div className="user_sessions_length">
          <h3>Durée moyenne des sessions</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={userAverageSessions.sessions}
              margin={{
                top: 20,
                left: 2,
                right: 5,
              }}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tickFormatter={(tick) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][tick - 1]}
                tick={{ fill: '#ffffff', fontSize: 12 }}
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
          <ResponsiveContainer width="100%" height={250}>
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
          {/* map User_main_data pour appeler 4 div => composant UserNutritionCard */}
        </div>
      </div>
    </>
  )
}

export default App
