import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./utils/Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      {/* <h1 style={headStyle.header}>{title}</h1> */}
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "purple" : "green"}
          label={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headStyle = {
//   header: {
//     color: "red",
//     backgroundColor: "lightyellow",
//   },
// };

export default Header;
