import PropTypes from "prop-types"

const IconSquare = ({icon, bgcolor}) => {
  return (
    <div className="icon_tab" style={{backgroundColor: bgcolor}}>
        {icon}
    </div>
  )
}

IconSquare.propTypes = {
    icon: PropTypes.node.isRequired,
    bgcolor: PropTypes.string.isRequired,
  };


export default IconSquare