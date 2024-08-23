import PropTypes from 'prop-types';

//recharts components
import {  ResponsiveContainer,RadialBarChart, RadialBar} from 'recharts';
import "./ScoreRadialBarchart.scss"

/**
 * Un composant de graphique radial en barres qui affiche le score quotidien de l'utilisateur
 * en pourcentage de son objectif atteint.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array<Object>} props.scoreData - Un tableau d'objets représentant les données de score à afficher.
 * @param {string} props.scoreData[].name - Le nom du score (par exemple, 'Score').
 * @param {number} props.scoreData[].uv - La valeur du score en pourcentage (0-100).
 * @param {string} props.scoreData[].fill - La couleur de remplissage de la barre dans le graphique.
 *
 * @returns {JSX.Element} Le composant de graphique radial en barres rendu.
 */


const ScoreRadialBarchart = ({scoreData}) => {
  return (
    <div className="user_score">
          <h3>Score</h3>
    <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="70%" 
              outerRadius="80%" 
              barSize={10} 
              data={scoreData}
              startAngle={90}
              endAngle={90 + 360 * (scoreData[0].uv / 100)}
            >
              <RadialBar
                background={{ fill: '#f5f5f5' }}
                clockWise
                dataKey="uv"
                cornerRadius={10}
                fill={scoreData[0].fill}
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
                  {`${scoreData[0].uv}%`}
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
  )
}

ScoreRadialBarchart.propTypes = {
    scoreData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        uv: PropTypes.number.isRequired,
        fill: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ScoreRadialBarchart