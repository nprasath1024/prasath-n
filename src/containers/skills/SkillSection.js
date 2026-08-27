import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

function SkillSection(props) {
  const theme = props.theme;

  // This function automatically finds your tech stack tools and applies the glow CSS class
  const highlightText = (text) => {
    const keywords = [
      "Informatica", "PowerCenter", "PowerExchange", "IICS", "Oracle",
      "Microsoft SQL Server", "PL/SQL", "SQL Server Management Studio (SSMS)",
      "SSMS", "Toad", "PuTTY", "Eclipse", "UltraEdit", "Git", "GitHub",
      "Visual Studio Code", "Unix Shell", "Batch", "AutoSys", "JIL scripts",
      "PROCEDE", "Guidewire ClaimCenter", "Rally", "HP Quality Center (ALM)",
      "Jira", "Core Java", "HTML/CSS", "Data Warehouse", "Data Mart", "Agile methodology"
    ];
    
    // Scans the sentence for any of the exact keywords
    const regex = new RegExp(`(${keywords.join('|').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
      if (isKeyword) {
        return <span key={index} className="tech-highlight">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div>
      <Fade bottom duration={2000} distance="20px">
        {/* Changed Expertise to Experience */}
        <h1 className="skills-heading" style={{ color: theme.text, textAlign: "center", margin: "40px 0" }}>
          Technical And Functional Experience
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
                        // Increased fontSize to 22px so it is very easy to read!
                        style={{ color: theme.secondaryText, marginBottom: "15px", lineHeight: "1.7", fontSize: "22px" }}
                      >
                        {highlightText(skillSentence)}
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