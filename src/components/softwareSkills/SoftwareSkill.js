import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons" style={{ display: "flex", flexWrap: "wrap", padding: 0, alignItems: "center", justifyContent: "center" }}>
          {props.logos.map((logo) => {
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
                  style={{ margin: "15px 20px", listStyle: "none" }}
                >
                  <img
                    src={require(`../../assests/images/${logo.imageSrc}`)}
                    alt={logo.skillName}
                    style={{
                      height: "45px", // Locks height for a perfectly even row
                      width: "auto",  // Prevents rectangular logos from squishing
                      maxWidth: "120px", 
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