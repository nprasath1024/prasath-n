import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons" style={{ display: "flex", flexWrap: "wrap", padding: 0 }}>
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li 
                  className="software-skill-inline" 
                  name={logo.skillName}
                  style={{ margin: "15px", listStyle: "none" }}
                >
                  <img
                    src={require(`../../assests/images/${logo.imageSrc}`)}
                    alt={logo.skillName}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;