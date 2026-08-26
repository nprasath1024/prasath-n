import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";
  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        {/* Enforced strict nowrap on the entire header row */}
        <header className="header" style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}>
          
          {/* flexShrink: 0 and minWidth: "max-content" absolutely prevents the logo from squishing */}
          <NavLink to={link} tag={Link} className="logo" style={{ flexShrink: 0, minWidth: "max-content", whiteSpace: "nowrap" }}>
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text, whiteSpace: "nowrap" }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn" style={{ flexShrink: 0 }}>
            <span className="navicon"></span>
          </label>
          
          {/* Enforced strict nowrap and zero shrinking on the menu container and all list items */}
          <ul className="menu" style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", flexShrink: 0 }}>
            <li style={{ flexShrink: 0 }}>
              <NavLink className="homei" to="/home" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ borderRadius: 5, color: theme.text }}>
                Home
              </NavLink>
            </li>
            <li style={{ flexShrink: 0 }}>
              <NavLink className="ec" to="/education" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ borderRadius: 5, color: theme.text }}>
                Education
              </NavLink>
            </li>
            <li style={{ flexShrink: 0 }}>
              <NavLink className="xp" to="/experience" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ borderRadius: 5, color: theme.text }}>
                Experience
              </NavLink>
            </li>
            <li style={{ flexShrink: 0 }}>
              <NavLink className="projects" to="/projects" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ borderRadius: 5, color: theme.text }}>
                Projects
              </NavLink>
            </li>
            <li style={{ flexShrink: 0 }}>
              <NavLink className="cr" to="/contact" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ borderRadius: 5, color: theme.text }}>
                Contact and Resume
              </NavLink>
            </li>
            <button {...styles} onClick={changeTheme} style={{ flexShrink: 0, marginLeft: "15px" }}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;