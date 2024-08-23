import PropTypes from 'prop-types';

//recharts components
import { XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import "./SessionsLenghtLinechart.scss"
/**
 * Un composant de graphique en ligne qui affiche la durée moyenne des sessions de l'utilisateur
 * pour chaque jour de la semaine.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array<Object>} props.userAverageSessions - Un tableau d'objets représentant les sessions moyennes par jour.
 * @param {number} props.userAverageSessions[].day - Le jour de la semaine, représenté par un numéro (1 = Lundi, 7 = Dimanche).
 * @param {number} props.userAverageSessions[].sessionLength - La durée moyenne de la session (en minutes) pour le jour donné.
 *
 * @returns {JSX.Element} Le composant de graphique en ligne rendu.
 */

const SessionsLenghtLinechart = ({userAverageSessions}) => {
  return (
    <div className="user_sessions_length">
          <h3>Durée moyenne des sessions</h3>
    <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={userAverageSessions}
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
  )
}

SessionsLenghtLinechart.propTypes = {
    userAverageSessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default SessionsLenghtLinechart