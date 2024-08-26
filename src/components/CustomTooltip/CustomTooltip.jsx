import PropTypes from 'prop-types';

/**
 * Composant Tooltip personnalisé pour afficher des informations sur les graphiques.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {boolean} props.active - Indique si le tooltip est actif (hover).
 * @param {Array<Object>} props.payload - Les données à afficher dans le tooltip.
 * @param {number} props.payload[].value - La valeur affichée pour chaque élément de `payload`.
 * @param {boolean} props.isSingleValue - Indique si le tooltip doit afficher une seule valeur (pour le LineChart).
 *
 * @returns {JSX.Element|null} - Retourne le JSX pour le tooltip ou null si non actif.
 */
const CustomTooltip = ({ active, payload, isSingleValue }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {/* conditionnement si il y a une ou 2 valeurs à afficher */}
        {isSingleValue ? (
          <p>{`${payload[0].value} min`}</p>  
          // affiche la durée en minutes pour le LineChart
        ) : (
          <>
            {/* affiche le poids en kg et les kCal */}
            <p>{`${payload[0].value} kg`}</p>  
            <p>{`${payload[1].value} kCal`}</p>  
          </>
        )}
      </div>
    );
  }
  
  return null;
};

// Définition des types de props attendues
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
  //ajout d'une prop pour indiquer le mode d'affichage
  isSingleValue: PropTypes.bool,  
};

export default CustomTooltip;

