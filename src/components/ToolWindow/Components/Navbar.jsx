import React from "react";
import SectionTitle from "./SectionTitle";
import PropTypes from "prop-types";

const Navbar = ({titles}) => {
  return <div className=" bg-solidgray w-full h-16 flex flex-row items-center justify-center space-x-4">
    {titles.map((title, index) => (
      <SectionTitle name={window.capitalize(title.name)} index={index + 1} key={index} disabled={title.disabled} />
    ))}
  </div>;
};

Navbar.defaultProps = {
  titles: [],
  selected: null,
};

Navbar.propsTypes = {
  titles: PropTypes.array,
  selected: PropTypes.number,
};

export default Navbar;