import IconSquare from '../IconSquare';
import PropTypes from 'prop-types';
import './UserNutritionCard.scss';

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
  iconColor: PropTypes.node.isRequired,
  bgcolor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default UserNutritionCard;
