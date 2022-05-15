/** @format */

import React from "react";
import "./_sidebar.scss";
import { logOut } from "../../redux/actions/auth.action";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
  MdHistory,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <nav
      onClick={() => {
        handleToggleSidebar(false);
      }}
      className={sidebar ? "sidebar open" : "sidebar"}
    >
      <Link className="sidebar__link" to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link className="sidebar__link" to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I Don't Know</span>
      </li>

      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
    </nav>
  );
};

export default Sidebar;
