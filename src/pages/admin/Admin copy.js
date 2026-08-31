import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Admin(props) {
  const theme = props.theme;

  const [formData, setFormData] = useState({
    title: greeting.title,
    full_name: greeting.full_name,
    subTitle: greeting.subTitle,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatedCode = `const greeting = {
  title: "${formData.title}",
  full_name: "${formData.full_name}",
  subTitle: "${formData.subTitle}",
  logo_name: "${greeting.logo_name}",
  resumeLink: "${greeting.resumeLink}",
  mail: "${greeting.mail}"
};`;

  const inputStyle = {
    width: "100%",
    padding: "15px",
    margin: "8px 0 25px",
    borderRadius: "8px",
    border: `1px solid ${theme.secondaryText}`,
    backgroundColor: theme.body,
    color: theme.text,
    fontFamily: "Google Sans Regular",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  return (
    <div style={{ backgroundColor: theme.body, minHeight: "100vh" }}>
      <Header theme={theme} setTheme={props.setTheme} />
      
      <div style={{ padding: "40px 5%", color: theme.text, fontFamily: "Google Sans Regular" }}>
        <Fade bottom duration={2000} distance="40px">
          <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>Portfolio Content Manager</h1>
          
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Edit Home Page Text</h2>
              
              <label style={{ fontWeight: "bold" }}>Greeting Title</label>
              <input name="title" value={formData.title} onChange={handleChange} style={inputStyle} />
              
              <label style={{ fontWeight: "bold" }}>Full Name</label>
              <input name="full_name" value={formData.full_name} onChange={handleChange} style={inputStyle} />
              
              <label style={{ fontWeight: "bold" }}>Subtitle (Bio)</label>
              <textarea name="subTitle" value={formData.subTitle} onChange={handleChange} style={{ ...inputStyle, height: "150px", resize: "vertical" }} />
            </div>

            <div style={{ flex: 1, minWidth: "300px" }}>
              <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Generated Code</h2>
              <p style={{ color: theme.secondaryText, marginBottom: "15px", lineHeight: "1.5" }}>
                Copy the code below and paste it over the <strong>greeting</strong> constant in your <code>src/portfolio.js</code> file to save your changes.
              </p>
              
              <textarea 
                readOnly 
                value={generatedCode} 
                style={{ 
                  width: "100%", 
                  height: "300px", 
                  padding: "20px", 
                  backgroundColor: "#1e1e1e", 
                  color: "#4af626", 
                  fontFamily: "monospace",
                  fontSize: "15px",
                  borderRadius: "8px",
                  border: "none",
                  boxSizing: "border-box"
                }} 
              />
            </div>
            
          </div>
        </Fade>
      </div>
      
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}