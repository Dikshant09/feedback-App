import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ title, bgColor, titleColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: titleColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "#ff6a95" }}>
          <h2>{title}</h2>
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  titleColor: "#ff6a95",
};

Header.prototype = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
};

export default Header;
