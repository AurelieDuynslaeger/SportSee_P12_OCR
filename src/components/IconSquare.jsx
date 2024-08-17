import React from "react";
import PropTypes from "prop-types"

const IconSquare = ({icon, iconColor, bgcolor}) => {
  return (
    <div className="icon_tab" style={{backgroundColor: bgcolor}}>
        {React.cloneElement(icon, { color: iconColor })}
    </div>
  )
}

IconSquare.propTypes = {
    icon: PropTypes.node.isRequired,
    bgcolor: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
  };
  IconSquare.defaultProps = {
    iconColor: '#000000',
  };

export default IconSquare