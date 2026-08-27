import React from "react";
import SoftwareSkill from "../softwareSkills/SoftwareSkill";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    if (!url || url.trim() === "") return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: project.url ? "pointer" : "default",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={project.name}
          onClick={() => openRepoinNewTab(project.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            {/* FIXED: Dynamic title styling. White glow for dark mode, bold purple for light mode */}
            <p 
              className="repo-name" 
              style={
                theme.name === "dark" 
                  ? { color: "#ffffff", textShadow: "0px 0px 4px rgba(255, 255, 255, 0.4)" } 
                  : { color: "#a435f0" }
              }
            >
              {project.name}
            </p>
          </div>
          
          <div 
            className="repo-description" 
            /* FIXED: Uses a darker grey (#333333) in light mode instead of the faded secondary text */
            style={{ color: theme.name === "dark" ? theme.secondaryText : "#333333", lineHeight: "1.7" }}
          >
            {project.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
          
          <div className="repo-details">
            <SoftwareSkill logos={project.softwareSkills || []} theme={theme} />
          </div>
        </div>
      </Fade>
    </div>
  );
}