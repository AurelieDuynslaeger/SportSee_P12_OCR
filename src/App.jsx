
import LeftNav from './components/LeftNav/LeftNav'
import TopNav from './components/TopNav/TopNav'
import { BsDot } from "react-icons/bs";
import './stylesheet/App.scss'

//mock datas
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mocks/mockData';

//barchart daily activity
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

//radar graph
import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';

function App() {

  const userData = USER_MAIN_DATA.find(user => user.id === 12);
  const userActivity = USER_ACTIVITY.find(activity => activity.userId === 12);
  // const userAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === 12);
  const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === 12);


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
            <h2>Activité Quotidiennes</h2>
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
                margin={{
                  top:5,
                  right: 30,
                  left: 20,
                  bottom:5,
                }}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <YAxis/>
                  <XAxis dataKey="day"/>
                  <Tooltip/>
                  <Bar dataKey="kilogram" fill='#020203'/>
                  <Bar dataKey="calories" fill='#FF0101'/>
                </BarChart>
              </ResponsiveContainer>
          </div>
        </div>
        <div className="user_sessions_length">Sessions Lenght</div>
        <div className="user_radar_graph">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={userPerformance.kind} />
            <Radar name="Mike" dataKey="value" fill="#ff01014d"/>
          </RadarChart>
      </ResponsiveContainer>
        </div>
        <div className="user_score">User Score</div>
        <div className="user_nutrition">
          {/* map User_main_data pour appeler 4 div => composant UserNutritionCard */}
        </div>
      </div>
    </>
  )
}

export default App
