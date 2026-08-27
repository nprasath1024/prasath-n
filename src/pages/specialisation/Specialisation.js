import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ProjectsImg from "../projects/ProjectsImg";
import EducationImg from "../education/EducationImg";
import { Fade } from "react-reveal";
import { specialisations, awards } from "../../portfolio.js";

function Specialisation(props) {
  const theme = props.theme;

  return (
    <div style={{ width: "100vw", maxWidth: "100%", overflowX: "hidden" }}>
      <Header theme={theme} setTheme={props.setTheme} />
      
      {/* --- SPECIALISATION SECTION --- */}
      <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "20px" }}>
        <Fade bottom duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "100%", height: "auto" }}>
              <ProjectsImg theme={theme} />
            </div>
            <h1 style={{ fontSize: "56px", fontFamily: "Google Sans Medium", color: theme.text, marginTop: "0px" }}>
              Specialisation
            </h1>
          </div>
        </Fade>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "50px", margin: "60px 40px" }}>
          {specialisations.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} key={repo.name} />;
          })}
        </div>
      </div>

      {/* --- AWARDS SECTION --- */}
      <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "120px", marginBottom: "50px" }}>
        <Fade bottom duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "100%", height: "auto" }}>
              <EducationImg theme={theme} />
            </div>
            <h1 style={{ fontSize: "56px", fontFamily: "Google Sans Medium", color: theme.text, marginTop: "0px" }}>
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