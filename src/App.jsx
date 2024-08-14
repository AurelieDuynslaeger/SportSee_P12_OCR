
import LeftNav from './components/LeftNav/LeftNav'
import TopNav from './components/TopNav/TopNav'
import './stylesheet/App.scss'

function App() {


  return (
    <>
      <TopNav/>
      <LeftNav/>
      <div className='main_content'>
        <div className='user_header'>User Header</div>
        <div className="user_daily_activity">Daily Activity</div>
        <div className="user_sessions_length">Sessions Lenght</div>
        <div className="user_radar_graph">Radar Graph</div>
        <div className="user_score">User Score</div>
        <div className="user_nutrition">User Nutrition</div>
      </div>
    </>
  )
}

export default App
