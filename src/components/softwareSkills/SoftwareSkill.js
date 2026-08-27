import React from "react";
import "./SoftwareSkill.css";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <li
                className="software-skill-inline"
                key={logo.skillName}
                name={logo.skillName}
              >
                <img 
                  src={require(`../../assests/images/${logo.imageSrc}`)} 
                  alt={logo.skillName}
                  className="skill-image"
                />
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