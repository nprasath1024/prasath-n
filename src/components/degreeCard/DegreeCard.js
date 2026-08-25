import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const style_img = style({
    width: "220px",
    height: "220px", // Forced to match width for a perfect circle
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: "10px",
    border: `1px solid ${theme.text}`,
    marginRight: "50px",
    boxShadow: `0px 0px 2px ${theme.text}`,
    transition: "all 0.2s ease-in-out",
    backgroundColor: "#ffffff", // Keeps the background crisp for logos
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 2px 10px ${theme.text}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
      height: "175px", // Matched for mobile perfectly round circles
    },
  });

  const card_body = style({
    border: `1px solid ${theme.text}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 0px 1px ${theme.text}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 2px 10px ${theme.text}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div {...style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "50%",
              objectFit: "contain",
            }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            // style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence) => {
              return (
                <p
                  key={sentence}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;