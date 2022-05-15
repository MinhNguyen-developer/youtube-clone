/** @format */

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import "./_header.scss";
import { useHistory } from "react-router-dom";
const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };
  return (
    <div className=" header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => {
          handleToggleSidebar();
        }}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.seekpng.com/png/full/920-9209963_hand-painted-original-cute-avatar-png-and-psd.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
