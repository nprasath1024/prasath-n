import React from "react";
import "./SoftwareSkill.css";

function SoftwareSkill(props) {
  // Pull the theme from props to power our dark mode logic
  const theme = props.theme; 
  
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            let imgSrc = null;
            
            try {
              imgSrc = require(`../../assests/images/${logo.imageSrc}`);
            } catch (err) {
              console.error(`Missing image file: ${logo.imageSrc}`);
            }

            return (
              <li
                className="software-skill-inline"
                key={logo.skillName}
                name={logo.skillName}
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={logo.skillName}
                    className="skill-image"
                    /* THE SMART BACKLIGHT: Adds a white app-icon background ONLY in dark mode */
                    style={
                      theme && theme.name === "dark" 
                      ? { backgroundColor: "#ffffff", borderRadius: "10px", padding: "4px" } 
                      : {}
                    }
                  />
                ) : (
                  <div 
                    className="skill-image" 
                    style={{ backgroundColor: '#444', borderRadius: '8px' }}
                    title={`Missing file: ${logo.imageSrc}`}
                  ></div>
                )}
                <p className="skill-title">{logo.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;