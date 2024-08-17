import IconSquare from '../IconSquare';
import PropTypes from 'prop-types';
import './UserNutritionCard.scss';

/**
 * Représente une carte de nutrition avec une icône, une valeur et une unité.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.icon - L'icône à afficher dans la carte.
 * @param {string} props.iconColor - La couleur de l'icône.
 * @param {string} props.bgcolor - La couleur de fond de l'icône.
 * @param {string} props.label - L'étiquette de la carte (par exemple, "Calories").
 * @param {number} props.value - La valeur de la nutrition (par exemple, 1930).
 * @param {string} props.unit - L'unité de mesure pour la valeur (par exemple, "kCal").
 * 
 * @returns {React.Element} Le composant UserNutritionCard.
 */
const UserNutritionCard = ({ icon, iconColor, bgcolor, label, value, unit }) => {
  return (
    <div className="user-nutrition-card">
      <IconSquare icon={icon} iconColor={iconColor} bgcolor={bgcolor} />
      <div className="nutrition-info">
        <p className="nutrition-value">{value}{unit}</p>
        <p className="nutrition-label">{label}</p>
      </div>
    </div>
  );
}

UserNutritionCard.propTypes = {
  icon: PropTypes.node.isRequired,
  iconColor: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default UserNutritionCard;

