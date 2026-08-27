import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ProjectsImg from "../projects/ProjectsImg";
import EducationImg from "../education/EducationImg";
import { Fade } from "react-reveal";
import { specialisations, awards } from "../../portfolio.js";
import "./Specialisation.css"; /* IMPORTS THE NEW RESPONSIVE CSS */

function Specialisation(props) {
  const theme = props.theme;

  return (
    <div className="specialisation-main">
      <Header theme={theme} setTheme={props.setTheme} />
      
      {/* --- SPECIALISATION SECTION --- */}
      <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "20px" }}>
        <Fade bottom duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "100%", height: "auto" }}>
              <ProjectsImg theme={theme} />
            </div>
            <h1 className="specialisation-heading-text" style={{ color: theme.text }}>
              Specialisation
            </h1>
          </div>
        </Fade>
        
        <div className="specialisation-cards-div">
          {specialisations.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} key={repo.name} />;
          })}
        </div>
      </div>

      {/* --- AWARDS SECTION --- */}
      <div className="awards-section" style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Fade bottom duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "100%", height: "auto" }}>
              <EducationImg theme={theme} />
            </div>
            <h1 className="specialisation-heading-text" style={{ color: theme.text }}>
              Awards
            </h1>
          </div>
        </Fade>
        
        <div style={{ marginTop: "60px" }}>
          {awards.data.map((award) => {
            return <ExperienceCard experience={award} theme={theme} key={award.title} />;
          })}
        </div>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Specialisation;