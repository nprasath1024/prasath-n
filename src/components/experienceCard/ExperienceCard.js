import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  
  // FIXED: Dynamic colors to ensure high contrast in Light Mode
  const titleColor = theme.name === "dark" ? theme.text : "#000000";
  const subtitleColor = theme.name === "dark" ? theme.secondaryText : "#333333";
  const descriptionColor = theme.name === "dark" ? theme.text : "#1f2229";

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt=""
          style={
            theme && theme.name === "dark" 
            ? { backgroundColor: "#ffffff", borderRadius: "10px", padding: "5px" } 
            : {}
          }
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: titleColor }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: subtitleColor }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          
          {(experience["duration"] || experience["location"]) && (
            <div className="experience-card-heading-right">
              {experience["duration"] && (
                <p
                  className="experience-card-duration"
                  style={{ color: subtitleColor }}
                >
                  {experience["duration"]}
                </p>
              )}
              {experience["location"] && (
                <p
                  className="experience-card-location"
                  style={{ color: subtitleColor }}
                >
                  {experience["location"]}
                </p>
              )}
            </div>
          )}
        </div>
        
        {experience["description"] && experience["description"].trim() !== "" && (
          <p
            className="experience-card-description"
            style={{ color: descriptionColor }}
          >
            {experience["description"]}
          </p>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;