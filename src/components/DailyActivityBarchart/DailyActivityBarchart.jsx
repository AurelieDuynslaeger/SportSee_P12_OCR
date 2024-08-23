import PropTypes from 'prop-types';
//react-icons
import { BsDot } from "react-icons/bs";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltipDaily from '../CustomTooltips/CustomTooltipDaily';
import "./DailyActivityBarchart.scss"

/**
 * Un composant de diagramme à barres qui affiche l'activité quotidienne de l'utilisateur.
 * Le graphique montre le poids (en kilogrammes) et les calories brûlées pour chaque session.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array<Object>} props.userActivitySessions - Un tableau d'objets représentant les sessions d'activité.
 * @param {string} props.userActivitySessions[].day - La date de la session au format 'YYYY-MM-DD'.
 * @param {number} props.userActivitySessions[].kilogram - Le poids de l'utilisateur (en kilogrammes) le jour donné.
 * @param {number} props.userActivitySessions[].calories - Le nombre de calories brûlées le jour donné.
 *
 * @returns {JSX.Element} Le composant de diagramme à barres rendu.
 */
const DailyActivityBarchart = ({ userActivitySessions }) => {
  return (
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
      <BarChart data={userActivitySessions}>
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
        <XAxis dataKey="day" tickFormatter={(value, index) => index + 1} />
        <Tooltip content={<CustomTooltipDaily />} />
        <Bar dataKey="kilogram" fill='#020203' barSize={8} radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill='#FF0101' barSize={8} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
        </div>
  );
}

DailyActivityBarchart.propTypes = {
  userActivitySessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DailyActivityBarchart;
