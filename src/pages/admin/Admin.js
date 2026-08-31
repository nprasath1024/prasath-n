import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { 
  settings, greeting, socialMediaLinks, skills, degrees, 
  certifications, experience, projectsHeader, contactPageData, 
  projects, specialisations, awards 
} from "../../portfolio";

export default function Admin(props) {
  const theme = props.theme;

  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState(greeting);
  const [contactData, setContactData] = useState(contactPageData.contactSection);
  const [socialData, setSocialData] = useState(socialMediaLinks);
  const [degreesData, setDegreesData] = useState(degrees.degrees);
  const [projectsData, setProjectsData] = useState(projects.data);
  const [specialisationsData, setSpecialisationsData] = useState(specialisations.data);
  const [awardsData, setAwardsData] = useState(awards.data);

  // --- HANDLERS ---
  const handleObjChange = (e, stateVar, setStateFunc) => {
    setStateFunc({ ...stateVar, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, e, stateVar, setStateFunc) => {
    const updatedArray = [...stateVar];
    updatedArray[index][e.target.name] = e.target.value;
    setStateFunc(updatedArray);
  };

  const addItem = (emptyObj, stateVar, setStateFunc) => {
    setStateFunc([...stateVar, emptyObj]);
  };

  const removeItem = (index, stateVar, setStateFunc) => {
    const updatedArray = [...stateVar];
    updatedArray.splice(index, 1);
    setStateFunc(updatedArray);
  };

  // --- CODE GENERATOR ---
  const generatedCode = `/* Change this file to get your personal Porfolio */

// Website related settings
const settings = ${JSON.stringify(settings, null, 2)};

//Home Page
const greeting = ${JSON.stringify(formData, null, 2)};

const socialMediaLinks = ${JSON.stringify(socialData, null, 2)};

const skills = ${JSON.stringify(skills, null, 2)};

const degrees = { degrees: ${JSON.stringify(degreesData, null, 2)} };

const certifications = ${JSON.stringify(certifications, null, 2)};

const experience = ${JSON.stringify(experience, null, 2)};

const projectsHeader = ${JSON.stringify(projectsHeader, null, 2)};

const contactPageData = { contactSection: ${JSON.stringify(contactData, null, 2)} };

const projects = { data: ${JSON.stringify(projectsData, null, 2)} };

const specialisations = { data: ${JSON.stringify(specialisationsData, null, 2)} };

const awards = { data: ${JSON.stringify(awardsData, null, 2)} };

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  specialisations,
  awards
};
`;

  // --- UI STYLES ---
  const inputStyle = {
    width: "100%", padding: "12px", margin: "8px 0 20px", borderRadius: "8px",
    border: `1px solid ${theme.secondaryText}`, backgroundColor: theme.body,
    color: theme.text, fontFamily: "Google Sans Regular", fontSize: "15px", boxSizing: "border-box",
  };
  
  const headerStyle = { fontSize: "22px", marginBottom: "15px", borderBottom: `1px solid ${theme.secondaryText}`, paddingBottom: "10px", marginTop: "30px" };
  const cardStyle = { backgroundColor: theme.name === "light" ? "#f9f9f9" : "#1e1e1e", padding: "20px", borderRadius: "10px", marginBottom: "20px", border: `1px solid ${theme.secondaryText}` };
  const btnStyle = { padding: "10px 15px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", border: "none", marginTop: "10px" };
  const addBtnStyle = { ...btnStyle, backgroundColor: "#47a148", color: "white", width: "100%" };
  const removeBtnStyle = { ...btnStyle, backgroundColor: "#d90036", color: "white", width: "100%" };

  return (
    <div style={{ backgroundColor: theme.body, minHeight: "100vh" }}>
      <Header theme={theme} setTheme={props.setTheme} />
      
      <div style={{ padding: "40px 5%", color: theme.text, fontFamily: "Google Sans Regular" }}>
        <Fade bottom duration={2000} distance="40px">
          <h1 style={{ fontSize: "35px", marginBottom: "30px", textAlign: "center" }}>Portfolio Content Manager</h1>
          
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "space-between" }}>
            
            {/* --- EDITOR COLUMN --- */}
            <div style={{ flex: "1 1 550px", display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {/* 1. Profile, Contact & Resume */}
              <div>
                <h2 style={{...headerStyle, marginTop: "0"}}>1. Profile, Contact & Resume</h2>
                <label>Greeting Title</label>
                <input name="title" value={formData.title} onChange={(e) => handleObjChange(e, formData, setFormData)} style={inputStyle} />
                <label>Full Name</label>
                <input name="full_name" value={formData.full_name} onChange={(e) => handleObjChange(e, formData, setFormData)} style={inputStyle} />
                <label>Subtitle (Bio)</label>
                <textarea name="subTitle" value={formData.subTitle} onChange={(e) => handleObjChange(e, formData, setFormData)} style={{ ...inputStyle, height: "100px", resize: "vertical" }} />
                
                <label>Email Address</label>
                <input name="mail" value={formData.mail} onChange={(e) => handleObjChange(e, formData, setFormData)} style={inputStyle} />
                <label>Resume Link</label>
                <input name="resumeLink" value={formData.resumeLink} onChange={(e) => handleObjChange(e, formData, setFormData)} style={inputStyle} />
                
                <label>Contact Page Description</label>
                <textarea name="description" value={contactData.description} onChange={(e) => handleObjChange(e, contactData, setContactData)} style={{ ...inputStyle, height: "100px", resize: "vertical" }} />
              </div>

              {/* 2. Social Media Links */}
              <div>
                <h2 style={headerStyle}>2. Social Media Links</h2>
                <label>LinkedIn URL</label>
                <input name="linkedin" value={socialData.linkedin} onChange={(e) => handleObjChange(e, socialData, setSocialData)} style={inputStyle} />
                <label>GitHub URL</label>
                <input name="github" value={socialData.github} onChange={(e) => handleObjChange(e, socialData, setSocialData)} style={inputStyle} />
                <label>Instagram URL</label>
                <input name="instagram" value={socialData.instagram} onChange={(e) => handleObjChange(e, socialData, setSocialData)} style={inputStyle} />
                <label>Facebook URL</label>
                <input name="facebook" value={socialData.facebook} onChange={(e) => handleObjChange(e, socialData, setSocialData)} style={inputStyle} />
              </div>

              {/* 3. Education (Degrees) */}
              <div>
                <h2 style={headerStyle}>3. Education (Degrees)</h2>
                {degreesData.map((deg, index) => (
                  <div key={index} style={cardStyle}>
                    <h3 style={{ margin: "0 0 15px 0", fontSize: "18px" }}>Degree #{index + 1}</h3>
                    <label>Institution Name</label>
                    <input name="title" value={deg.title} onChange={(e) => handleArrayChange(index, e, degreesData, setDegreesData)} style={inputStyle} />
                    <label>Degree / Certification</label>
                    <input name="subtitle" value={deg.subtitle} onChange={(e) => handleArrayChange(index, e, degreesData, setDegreesData)} style={inputStyle} />
                    <button style={removeBtnStyle} onClick={() => removeItem(index, degreesData, setDegreesData)}>Remove Degree</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ title: "New Institution", subtitle: "Degree", logo_path: "logo.png", alt_name: "", duration: "", descriptions: [""], website_link: "" }, degreesData, setDegreesData)}>+ Add New Degree</button>
              </div>

              {/* 4. Projects */}
              <div>
                <h2 style={headerStyle}>4. Projects</h2>
                {projectsData.map((proj, index) => (
                  <div key={index} style={cardStyle}>
                    <h3 style={{ margin: "0 0 15px 0", fontSize: "18px" }}>Project #{index + 1}</h3>
                    <label>Project Name</label>
                    <input name="name" value={proj.name} onChange={(e) => handleArrayChange(index, e, projectsData, setProjectsData)} style={inputStyle} />
                    <label>Description</label>
                    <textarea name="description" value={proj.description} onChange={(e) => handleArrayChange(index, e, projectsData, setProjectsData)} style={{ ...inputStyle, height: "150px" }} />
                    <button style={removeBtnStyle} onClick={() => removeItem(index, projectsData, setProjectsData)}>Remove Project</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ name: "New Project", url: "", description: "Description...", softwareSkills: [] }, projectsData, setProjectsData)}>+ Add New Project</button>
              </div>

              {/* 5. Specialisations */}
              <div>
                <h2 style={headerStyle}>5. Specialisations</h2>
                {specialisationsData.map((spec, index) => (
                  <div key={index} style={cardStyle}>
                    <h3 style={{ margin: "0 0 15px 0", fontSize: "18px" }}>Specialisation #{index + 1}</h3>
                    <label>Role / Title</label>
                    <input name="name" value={spec.name} onChange={(e) => handleArrayChange(index, e, specialisationsData, setSpecialisationsData)} style={inputStyle} />
                    <label>Description</label>
                    <textarea name="description" value={spec.description} onChange={(e) => handleArrayChange(index, e, specialisationsData, setSpecialisationsData)} style={{ ...inputStyle, height: "120px" }} />
                    <button style={removeBtnStyle} onClick={() => removeItem(index, specialisationsData, setSpecialisationsData)}>Remove Specialisation</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ name: "New Specialisation", url: "", description: "Description here...", softwareSkills: [] }, specialisationsData, setSpecialisationsData)}>+ Add New Specialisation</button>
              </div>

              {/* 6. Awards */}
              <div>
                <h2 style={headerStyle}>6. Awards</h2>
                {awardsData.map((award, index) => (
                  <div key={index} style={cardStyle}>
                    <h3 style={{ margin: "0 0 15px 0", fontSize: "18px" }}>Award #{index + 1}</h3>
                    <label>Award Title</label>
                    <input name="title" value={award.title} onChange={(e) => handleArrayChange(index, e, awardsData, setAwardsData)} style={inputStyle} />
                    <label>Company</label>
                    <input name="company" value={award.company} onChange={(e) => handleArrayChange(index, e, awardsData, setAwardsData)} style={inputStyle} />
                    <button style={removeBtnStyle} onClick={() => removeItem(index, awardsData, setAwardsData)}>Remove Award</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ title: "New Award", company: "Company", logo_path: "logo.png", color: "#000000" }, awardsData, setAwardsData)}>+ Add New Award</button>
              </div>

            </div>

            {/* --- GENERATED CODE COLUMN --- */}
            <div style={{ flex: "1 1 500px", position: "sticky", top: "20px", height: "fit-content" }}>
              <h2 style={{...headerStyle, marginTop: "0"}}>Generated Full Output</h2>
              <p style={{ color: theme.secondaryText, marginBottom: "15px", lineHeight: "1.5" }}>
                Select all text below (Ctrl+A), Copy (Ctrl+C), and Paste (Ctrl+V) directly over your entire <strong>src/portfolio.js</strong> file to save all changes instantly.
              </p>
              <textarea 
                readOnly 
                value={generatedCode} 
                style={{ 
                  width: "100%", height: "80vh", padding: "20px", 
                  backgroundColor: "#1e1e1e", color: "#4af626", 
                  fontFamily: "monospace", fontSize: "13px", borderRadius: "8px", 
                  border: "none", boxSizing: "border-box", whiteSpace: "pre-wrap"
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
