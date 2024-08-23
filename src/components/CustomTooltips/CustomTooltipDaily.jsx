import PropTypes from 'prop-types';  // Importer PropTypes pour la validation des props

/**
 *composant Tooltip personnalisé pour afficher des informations sur les barres du graphique d'activités quotidiennes.
 *
 * @param {Object} props - Les propriétés passées au composant
 * @param {boolean} props.active - Indique si le tooltip est actif (hoover)
 * @param {Array<Object>} props.payload - Les données à afficher dans le tooltip
 * @param {number} props.payload.value - La valeur affichée pour chaque élément de `payload`
 *
 * @returns {JSX.Element|null} - Retourne le JSX pour le tooltip ou null si pas actif
 */
const CustomTooltipDaily = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  
  return null;
};

//définition des types de props attendues
CustomTooltipDaily.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  )
};

export default CustomTooltipDaily;

