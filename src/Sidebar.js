import React from "react";
import { NavLink , Link } from "react-router-dom";
import {observer} from "mobx-react";

// Logo
import logo from "./assets/theindex.svg";
import authStore from "./stores/authStore";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>
        {authStore.user !== null ?
        <h4 className="menu-item">
          <Link to="/" onClick={authStore.logout}>LOGOUT {authStore.user.username}</Link>
        </h4>:  <div>
        <h4 className="menu-item">
          <NavLink to="/login">LOGIN</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/signup">SIGN UP</NavLink>
        </h4>
        </div>}

      </section>
    </div>
  );
};

export default observer(Sidebar);
