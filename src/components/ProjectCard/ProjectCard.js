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
            <p className="repo-name project-title-glow" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          
          <div 
            className="repo-description" 
            style={{ color: theme.secondaryText, lineHeight: "1.7" }}
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