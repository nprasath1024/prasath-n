import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      <Fade bottom duration={2000} distance="20px">
        <h1 className="skills-heading" style={{ color: theme.text, textAlign: "center", margin: "40px 0" }}>
          Technical And Functional Expertise
        </h1>
      </Fade>

      {skills.data.map((skill) => {
        return (
          <div key={skill.title} className="skills-main-div" style={{ justifyContent: "center" }}>
            <div className="skills-text-div" style={{ width: "100%", maxWidth: "900px" }}>
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text, marginBottom: "20px" }}>
                  {skill.title}
                </h1>
              </Fade>
              
              {skill.softwareSkills && skill.softwareSkills.length > 0 && (
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
              )}

              <Fade right duration={2000}>
                <div style={{ marginTop: "20px" }}>
                  {skill.skills.map((skillSentence, i) => {
                    return (
                      <p
                        key={i}
                        className="subTitle skills-text"
                        // Increased fontSize to 19px for better readability
                        style={{ color: theme.secondaryText, marginBottom: "15px", lineHeight: "1.7", fontSize: "19px" }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillSection;