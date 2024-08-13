import logo from "../../assets/sportsee_logo.svg"
import "../TopNav/Topnav.scss"

const TopNav = () => {
  return (
    <nav className="top_nav">
        <img src={logo} alt="sport see logo" className="logo"/>
        <div className="top_nav_links">
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </div>
    </nav>
  )
}

export default TopNav