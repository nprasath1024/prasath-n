import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

function SkillSection(props) {
  const theme = props.theme;

  // This function scans your bullet points for the tools and applies the glowing CSS class
  const highlightText = (text) => {
    // Ordered longest to shortest so tools don't get accidentally chopped
    const keywords = [
      "SQL Server Management Studio (SSMS)",
      "HP Quality Center (ALM)",
      "Guidewire ClaimCenter",
      "Microsoft SQL Server",
      "Informatica PowerCenter",
      "code release activities",
      "ETL reconciliation",
      "PowerExchange",
      "Visual Studio Code",
      "Agile methodology",
      "Data Warehouse",
      "Data Mart",
      "PowerCenter",
      "Informatica",
      "Core Java",
      "HTML/CSS",
      "Unix Shell",
      "JIL scripts",
      "AutoSys",
      "PROCEDE",
      "Eclipse",
      "UltraEdit",
      "GitHub",
      "PL/SQL",
      "Oracle",
      "Toad",
      "PuTTY",
      "Batch",
      "Rally",
      "Jira",
      "IICS",
      "SSMS",
      "Git"
    ];
    
    // Properly escapes characters and creates an 'OR' list for the search
    const escapedKeywords = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
    
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
      if (isKeyword) {
        return <span key={index} className="tech-highlight">{part}</span>;
      }
      return <span key={index}>{part}</span>; // Standard text without the glow
    });
  };

  return (
    <div>
      <Fade bottom duration={2000} distance="20px">
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
                <div style={{ marginTop: "40px" }}>
                  {skill.skills.map((skillSentence, i) => {
                    return (
                      <p
                        key={i}
                        className="subTitle skills-text"
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