import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import "./dropdown.css";
import { useToggle } from "./useToggleHook";

const subMenuAnimate = {
  enter: {
    opacity: 1,
    x: -16,
    y: 7,
    display: "block",
  },
  exit: {
    opacity: 0,
    x: -16,
    y: 7,
    transitionEnd: {
      display: "none",
    },
  },
};

function Dropdown({ filterName, filterOptions }) {
  const [optionsFilter] = useState(filterOptions);

  const [selectedItem, setSelectedItem] = useState(filterName);

  const [isOpen, toggleisOpen] = useToggle(false);

  const toggleDropDownMenu = () => {
    toggleisOpen();
  };

  const selectOption = (option) => {
    setSelectedItem(option);
  };

  return (
    <motion.div className="dropdown" onClick={toggleDropDownMenu}>
      <label>
        <span>{selectedItem}</span>
        <span className="dropdow-icon-arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </label>

      <motion.ul
        className="dropdown-options-list"
        initial="exit"
        animate={isOpen ? "enter" : "exit"}
        variants={subMenuAnimate}
        transition={{ duration: 0.3 }}
      >
        {optionsFilter.map((option) => (
          <li onClick={() => selectOption(option)}>{option}</li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Dropdown;
