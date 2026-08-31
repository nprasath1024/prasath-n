import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const isHomePage = window.location.hash === "#/home" || window.location.hash === "#/" || window.location.hash === "";

  return (
    <div className="footer-div">
      <Fade>
        <div>
          <p 
            className={`footer-text ${isHomePage ? "hide-on-mobile" : ""}`} 
            style={{ color: props.theme.secondaryText }}
          >
            {/* HIDDEN BACKDOOR: Clicking the heart icon now redirects you directly to the Admin UI */}
            Made with <a href="#/admin" style={{ textDecoration: "none", color: "inherit", cursor: "default" }}><span role="img">❤️</span></a> by {greeting.title2}
          </p>

          {isHomePage && (
            <p 
              className="footer-text show-on-mobile-only" 
              style={{ color: props.theme.secondaryText }}
            >
              Use the menu at the top of the page to explore other sections.
            </p>
          )}
        </div>
      </Fade>
    </div>
  );
}