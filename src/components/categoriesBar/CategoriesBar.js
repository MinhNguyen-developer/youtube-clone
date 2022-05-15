/** @format */

import React from "react";
import "./_categoriesBar.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/video.action";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Code",
  "Nhat Ha",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(value));
  };
  return (
    <div className="CategoriesBar">
      {keywords.map((value, index) => (
        <span
          className={activeElement === value ? "active" : ""}
          onClick={() => handleClick(value)}
          key={index}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
