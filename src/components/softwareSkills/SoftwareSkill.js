import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons" style={{ display: "flex", flexWrap: "wrap", padding: 0 }}>
          {props.logos.map((logo) => {
            {/* Generates a 100% unique ID for every tooltip to prevent browser crash */}
            const uniqueId = `tooltip-${logo.skillName.replace(/[^a-zA-Z0-9]/g, "")}`;
            
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={uniqueId}>
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
                      cursor: "pointer"
                    }}
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