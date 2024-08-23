import PropTypes from 'prop-types';

import {  ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import "./RadarGraphPerf.scss"
/**
 * Un composant de graphique radar qui affiche les performances de l'utilisateur 
 * sur différentes dimensions (cardio, énergie, endurance, force, vitesse, intensité).
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array<Object>} props.radarData - Un tableau d'objets représentant les performances de l'utilisateur.
 * @param {string} props.radarData[].subject - Le type de performance (par exemple, 'cardio', 'énergie', etc.).
 * @param {number} props.radarData[].value - La valeur de performance pour le type correspondant.
 *
 * @returns {JSX.Element} Le composant de graphique radar rendu.
 */



const RadarGraphPerf = ({radarData}) => {
  console.log("Radar Data before rendering:", radarData);
  return (
    <div className="user_radar_graph">
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
      <PolarGrid radialLines={false}/>
      <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 10 }}/>
      <Radar name="Mike" dataKey="value" fill="#ff01014d"/>
    </RadarChart>
  </ResponsiveContainer>
  </div>
  )
}

RadarGraphPerf.propTypes = {
    radarData: PropTypes.arrayOf(
      PropTypes.shape({
        subject: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default RadarGraphPerf