import PropTypes from 'prop-types';
//react-icons
import { BsDot } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
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

  //calcul des limites pour l'axe Y (poids)
  const minWeight = Math.min(...userActivitySessions.map(session => session.kilogram))-1;
  const maxWeight = minWeight + 7;

  //générer les valeurs des ticks pour l'axe Y des poids (un trait tous les kg)
  //nvl instance = définir la longueur de tableau
  //longueur = différence entre min weight et max weight
  //si 70 et 73kg+1 donc 4
  //_ élément actuel du tableau, i = index de l'élement
  //chaque élement sera calculé en ajoutant l'index à min weight
  //70 +0, 70+1,  70+2 etc...=> ticks pr le Y axis 
  const weightTicks = Array.from({ length: maxWeight - minWeight + 1 }, (_, i) => minWeight + i);

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
        <CartesianGrid strokeDasharray="1 1" horizontal={true} vertical={false} />
        <XAxis dataKey="day" tickFormatter={(value, index) => index + 1} />
        {/* axe Y visible pour les poids */}
        <YAxis
              yAxisId="weight"
              orientation="right"
              axisLine={false}
              tickLine={false}
              domain={[minWeight, maxWeight]}
              ticks={weightTicks}
            />

            {/* axe Y invisible pour les calories */}
            <YAxis
              yAxisId="calories"
              hide={true}
              domain={[0, 600]}//échelle fixée des calories de 0 à 600
            />
        <Tooltip content={<CustomTooltip isSingleValue={false} />} />
        <Bar dataKey="kilogram" yAxisId="weight" fill='#020203' barSize={8} radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" yAxisId="calories" fill='#FF0101' barSize={8} radius={[10, 10, 0, 0]} />
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
