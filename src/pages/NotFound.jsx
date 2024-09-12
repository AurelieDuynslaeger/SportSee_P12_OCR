import LeftNav from "../components/LeftNav/LeftNav"
import TopNav from "../components/TopNav/TopNav"
import PropTypes from "prop-types"
import "../stylesheet/App.scss"


const NotFound = ({errorMsg}) => {
  return (
    <>
      <TopNav />
      <LeftNav />
        <div className="notfound_content">
          {errorMsg ? (
          <p>{errorMsg}</p>
        ) : (
          <>
              <h1>404</h1>
              <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
          </>
        )}
        </div>
    </>
  )
}

NotFound.propTypes = {
  errorMsg: PropTypes.string,
};

export default NotFound