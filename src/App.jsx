
import LeftNav from './components/LeftNav/LeftNav'
import TopNav from './components/TopNav/TopNav'
import './stylesheet/App.scss'

function App() {


  return (
    <>
      <TopNav/>
      <LeftNav/>
      <div className='main_content'>
        <div className='user_header'>
          <h1>Bonjour <span className='user_first_name'>Prénom</span></h1>
          <p>Félicitations ! Vous avez explosé vos objectifs d&apos;hier !</p>
        </div>
        <div className="user_daily_activity">
          <div className='daily_activity_header'>
            <h2>Activité Quotidiennes</h2>
            <div className='weight_kcal'>
              <div className='weight'>
                <img src="" alt="" />
                <p>Poids (kg)</p>
              </div>
              <div className='kcal'>
                <img src="" alt="" />
                <p>Calories brûlées (kCal)</p>
              </div>
            </div>
          </div>
          <div className='daily_activity_barchart'>
              Bar Chart
          </div>
        </div>
        <div className="user_sessions_length">Sessions Lenght</div>
        <div className="user_radar_graph">Radar Graph</div>
        <div className="user_score">User Score</div>
        <div className="user_nutrition">
          {/* map User_main_data pour appeler 4 div => composant UserNutritionCard */}
        </div>
      </div>
    </>
  )
}

export default App
