import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  // Checks if the user is on the Home route
  const isHomePage = window.location.hash === "#/home" || window.location.hash === "#/" || window.location.hash === "";

  return (
    <div className="footer-div">
      <Fade>
        {/* THE FIX: Wrapped both paragraphs in a single <div> so <Fade> doesn't crash on other pages */}
        <div>
          <p 
            className={`footer-text ${isHomePage ? "hide-on-mobile" : ""}`} 
            style={{ color: props.theme.secondaryText }}
          >
            Made with <span role="img">❤️</span> by {greeting.title2}
          </p>

          {isHomePage && (
            <p 
              className="footer-text show-on-mobile-only" 
              style={{ color: props.theme.secondaryText }}
            >
              Tap the menu icon above to explore other sections.
            </p>
          )}
        </div>
      </Fade>
    </div>
  );
}