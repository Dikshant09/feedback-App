import PropTypes from "prop-types";

const Header = ({ title, bgColor, titleColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: titleColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Feedback UI",
  bgColor: 'rgba(0, 0, 0, 0.4)',
  titleColor: "#ff6a95"
};

Header.prototype = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
};

export default Header;
