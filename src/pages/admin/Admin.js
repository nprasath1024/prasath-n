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
  const [skillsData, setSkillsData] = useState(skills.data);
  const [experienceData, setExperienceData] = useState(experience.sections);
  const [degreesData, setDegreesData] = useState(degrees.degrees);
  const [projectsData, setProjectsData] = useState(projects.data);
  const [specialisationsData, setSpecialisationsData] = useState(specialisations.data);
  const [awardsData, setAwardsData] = useState(awards.data);

  // --- FLAT & SHALLOW ARRAY HANDLERS ---
  const handleObjChange = (e, stateVar, setStateFunc) => {
    setStateFunc({ ...stateVar, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, e, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated[index][e.target.name] = e.target.value;
    setStateFunc(updated);
  };

  const addItem = (emptyObj, stateVar, setStateFunc) => {
    setStateFunc([...stateVar, emptyObj]);
  };

  const removeItem = (index, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated.splice(index, 1);
    setStateFunc(updated);
  };

  // --- DEEP NESTED HANDLERS (For Skills & Experience) ---
  const handleNestedObjChange = (groupIndex, itemIndex, e, arrayName, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated[groupIndex][arrayName][itemIndex][e.target.name] = e.target.value;
    setStateFunc(updated);
  };

  const addNestedItem = (groupIndex, arrayName, emptyObj, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated[groupIndex][arrayName].push(emptyObj);
    setStateFunc(updated);
  };

  const removeNestedItem = (groupIndex, arrayName, itemIndex, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated[groupIndex][arrayName].splice(itemIndex, 1);
    setStateFunc(updated);
  };

  // --- STRING ARRAY HANDLERS (For Bullet Points) ---
  const handleStringArrayChange = (groupIndex, itemIndex, e, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated[groupIndex].skills[itemIndex] = e.target.value;
    setStateFunc(updated);
  };

  const addStringItem = (groupIndex, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated[groupIndex].skills.push("⚡ New bullet point...");
    setStateFunc(updated);
  };

  const removeStringItem = (groupIndex, itemIndex, stateVar, setStateFunc) => {
    const updated = [...stateVar];
    updated[groupIndex].skills.splice(itemIndex, 1);
    setStateFunc(updated);
  };

  // --- CODE GENERATOR ---
  const generatedCode = `/* Change this file to get your personal Porfolio */

// Website related settings
const settings = ${JSON.stringify(settings, null, 2)};

//Home Page
const greeting = ${JSON.stringify(formData, null, 2)};

const socialMediaLinks = ${JSON.stringify(socialData, null, 2)};

const skills = { data: ${JSON.stringify(skillsData, null, 2)} };

const degrees = { degrees: ${JSON.stringify(degreesData, null, 2)} };

const certifications = ${JSON.stringify(certifications, null, 2)};

const experience = {
  title: "${experience.title}",
  subtitle: "${experience.subtitle}",
  description: "${experience.description}",
  header_image_path: "${experience.header_image_path}",
  sections: ${JSON.stringify(experienceData, null, 2)}
};

const projectsHeader = ${JSON.stringify(projectsHeader, null, 2)};

const contactPageData = { contactSection: ${JSON.stringify(contactData, null, 2)} };

const projects = { data: ${JSON.stringify(projectsData, null, 2)} };

const specialisations = { data: ${JSON.stringify(specialisationsData, null, 2)} };

const awards = { data: ${JSON.stringify(awardsData, null, 2)} };

export {
  settings, greeting, socialMediaLinks, skills, degrees, 
  certifications, experience, projectsHeader, contactPageData, 
  projects, specialisations, awards
};
`;

  // --- UI STYLES ---
  const inputStyle = {
    width: "100%", padding: "10px", margin: "5px 0 15px", borderRadius: "5px",
    border: `1px solid ${theme.secondaryText}`, backgroundColor: theme.body,
    color: theme.text, fontFamily: "Google Sans Regular", fontSize: "14px", boxSizing: "border-box",
  };
  
  const headerStyle = { fontSize: "22px", marginBottom: "15px", borderBottom: `1px solid ${theme.secondaryText}`, paddingBottom: "10px", marginTop: "30px", color: theme.text };
  const subHeaderStyle = { fontSize: "18px", margin: "15px 0", color: theme.secondaryText };
  const cardStyle = { backgroundColor: theme.name === "light" ? "#f5f5f5" : "#1e1e1e", padding: "15px", borderRadius: "8px", marginBottom: "15px", border: `1px solid ${theme.secondaryText}` };
  const nestedCardStyle = { backgroundColor: theme.name === "light" ? "#ffffff" : "#2a2c3f", padding: "10px", borderRadius: "5px", marginBottom: "10px", border: `1px solid #555` };
  
  const btnStyle = { padding: "8px 12px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", border: "none", fontSize: "13px" };
  const addBtnStyle = { ...btnStyle, backgroundColor: "#47a148", color: "white", width: "100%", marginTop: "10px" };
  const removeBtnStyle = { ...btnStyle, backgroundColor: "#d90036", color: "white", marginTop: "5px" };

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
                <textarea name="subTitle" value={formData.subTitle} onChange={(e) => handleObjChange(e, formData, setFormData)} style={{ ...inputStyle, height: "80px", resize: "vertical" }} />
                <label>Email Address</label>
                <input name="mail" value={formData.mail} onChange={(e) => handleObjChange(e, formData, setFormData)} style={inputStyle} />
                <label>Resume Link</label>
                <input name="resumeLink" value={formData.resumeLink} onChange={(e) => handleObjChange(e, formData, setFormData)} style={inputStyle} />
              </div>

              {/* 2. Home Page: Skills & Highlights */}
              <div>
                <h2 style={headerStyle}>2. Home Page: Skills & Highlights</h2>
                
                {/* Icons Group */}
                <div style={cardStyle}>
                  <h3 style={subHeaderStyle}>{skillsData[0].title} (Icons)</h3>
                  {skillsData[0].softwareSkills.map((skill, index) => (
                    <div key={index} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                      <input name="skillName" value={skill.skillName} onChange={(e) => handleNestedObjChange(0, index, e, "softwareSkills", skillsData, setSkillsData)} style={{...inputStyle, margin: 0}} placeholder="Skill Name" />
                      <input name="imageSrc" value={skill.imageSrc} onChange={(e) => handleNestedObjChange(0, index, e, "softwareSkills", skillsData, setSkillsData)} style={{...inputStyle, margin: 0}} placeholder="File (e.g. icon.png)" />
                      <button style={{...removeBtnStyle, margin: 0}} onClick={() => removeNestedItem(0, "softwareSkills", index, skillsData, setSkillsData)}>X</button>
                    </div>
                  ))}
                  <button style={addBtnStyle} onClick={() => addNestedItem(0, "softwareSkills", { skillName: "New Skill", imageSrc: "icon.png" }, skillsData, setSkillsData)}>+ Add Tool/Icon</button>
                </div>

                {/* Bullet Points Group 1 */}
                <div style={cardStyle}>
                  <h3 style={subHeaderStyle}>{skillsData[1].title} (Bullets)</h3>
                  {skillsData[1].skills.map((bullet, index) => (
                    <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                      <textarea value={bullet} onChange={(e) => handleStringArrayChange(1, index, e, skillsData, setSkillsData)} style={{...inputStyle, margin: 0, height: "60px"}} />
                      <button style={{...removeBtnStyle, margin: 0, height: "60px"}} onClick={() => removeStringItem(1, index, skillsData, setSkillsData)}>X</button>
                    </div>
                  ))}
                  <button style={addBtnStyle} onClick={() => addStringItem(1, skillsData, setSkillsData)}>+ Add Bullet Point</button>
                </div>

                {/* Bullet Points Group 2 */}
                <div style={cardStyle}>
                  <h3 style={subHeaderStyle}>{skillsData[2].title} (Bullets)</h3>
                  {skillsData[2].skills.map((bullet, index) => (
                    <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                      <textarea value={bullet} onChange={(e) => handleStringArrayChange(2, index, e, skillsData, setSkillsData)} style={{...inputStyle, margin: 0, height: "60px"}} />
                      <button style={{...removeBtnStyle, margin: 0, height: "60px"}} onClick={() => removeStringItem(2, index, skillsData, setSkillsData)}>X</button>
                    </div>
                  ))}
                  <button style={addBtnStyle} onClick={() => addStringItem(2, skillsData, setSkillsData)}>+ Add Bullet Point</button>
                </div>
              </div>

              {/* 3. Experience & Certifications (Nested) */}
              <div>
                <h2 style={headerStyle}>3. Experience & Certifications</h2>
                {experienceData.map((section, secIndex) => (
                  <div key={secIndex} style={cardStyle}>
                    <input name="title" value={section.title} onChange={(e) => handleArrayChange(secIndex, e, experienceData, setExperienceData)} style={{...inputStyle, fontSize: "18px", fontWeight: "bold"}} placeholder="Section Title (e.g. Work)" />
                    
                    {section.experiences.map((exp, expIndex) => (
                      <div key={expIndex} style={nestedCardStyle}>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <div style={{ flex: 1 }}>
                            <label style={{ fontSize: "12px" }}>Title/Role</label>
                            <input name="title" value={exp.title} onChange={(e) => handleNestedObjChange(secIndex, expIndex, e, "experiences", experienceData, setExperienceData)} style={inputStyle} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <label style={{ fontSize: "12px" }}>Company</label>
                            <input name="company" value={exp.company} onChange={(e) => handleNestedObjChange(secIndex, expIndex, e, "experiences", experienceData, setExperienceData)} style={inputStyle} />
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <div style={{ flex: 1 }}>
                            <label style={{ fontSize: "12px" }}>Logo Path</label>
                            <input name="logo_path" value={exp.logo_path} onChange={(e) => handleNestedObjChange(secIndex, expIndex, e, "experiences", experienceData, setExperienceData)} style={inputStyle} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <label style={{ fontSize: "12px" }}>Duration</label>
                            <input name="duration" value={exp.duration} onChange={(e) => handleNestedObjChange(secIndex, expIndex, e, "experiences", experienceData, setExperienceData)} style={inputStyle} />
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                           <button style={removeBtnStyle} onClick={() => removeNestedItem(secIndex, "experiences", expIndex, experienceData, setExperienceData)}>Remove Item</button>
                        </div>
                      </div>
                    ))}
                    <button style={{...addBtnStyle, backgroundColor: "#2ab0ee"}} onClick={() => addNestedItem(secIndex, "experiences", { title: "New Role", company: "Company", company_url: " ", logo_path: "logo.png", duration: "Date - Date", location: "City", description: " ", color: "#000000" }, experienceData, setExperienceData)}>+ Add Item to {section.title}</button>
                    <button style={{...removeBtnStyle, width: "100%", marginTop: "15px"}} onClick={() => removeItem(secIndex, experienceData, setExperienceData)}>Delete Entire Section</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ title: "New Section", experiences: [] }, experienceData, setExperienceData)}>+ Create New Main Section</button>
              </div>

              {/* 4. Education (Degrees) */}
              <div>
                <h2 style={headerStyle}>4. Education (Degrees)</h2>
                {degreesData.map((deg, index) => (
                  <div key={index} style={cardStyle}>
                    <input name="title" value={deg.title} onChange={(e) => handleArrayChange(index, e, degreesData, setDegreesData)} style={inputStyle} placeholder="Institution Name" />
                    <input name="subtitle" value={deg.subtitle} onChange={(e) => handleArrayChange(index, e, degreesData, setDegreesData)} style={inputStyle} placeholder="Degree" />
                    <input name="logo_path" value={deg.logo_path} onChange={(e) => handleArrayChange(index, e, degreesData, setDegreesData)} style={inputStyle} placeholder="Logo Path (e.g. uni.png)" />
                    <button style={removeBtnStyle} onClick={() => removeItem(index, degreesData, setDegreesData)}>Remove Degree</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ title: "New Institution", subtitle: "Degree", logo_path: "logo.png", alt_name: "", duration: "", descriptions: [""], website_link: "" }, degreesData, setDegreesData)}>+ Add New Degree</button>
              </div>

              {/* 5. Projects */}
              <div>
                <h2 style={headerStyle}>5. Projects</h2>
                {projectsData.map((proj, index) => (
                  <div key={index} style={cardStyle}>
                    <input name="name" value={proj.name} onChange={(e) => handleArrayChange(index, e, projectsData, setProjectsData)} style={inputStyle} placeholder="Project Name" />
                    <textarea name="description" value={proj.description} onChange={(e) => handleArrayChange(index, e, projectsData, setProjectsData)} style={{ ...inputStyle, height: "120px" }} />
                    <button style={removeBtnStyle} onClick={() => removeItem(index, projectsData, setProjectsData)}>Remove Project</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ name: "New Project", url: "", description: "Description...", softwareSkills: [] }, projectsData, setProjectsData)}>+ Add New Project</button>
              </div>

              {/* 6. Specialisations */}
              <div>
                <h2 style={headerStyle}>6. Specialisations</h2>
                {specialisationsData.map((spec, index) => (
                  <div key={index} style={cardStyle}>
                    <input name="name" value={spec.name} onChange={(e) => handleArrayChange(index, e, specialisationsData, setSpecialisationsData)} style={inputStyle} placeholder="Role / Title" />
                    <textarea name="description" value={spec.description} onChange={(e) => handleArrayChange(index, e, specialisationsData, setSpecialisationsData)} style={{ ...inputStyle, height: "100px" }} />
                    <button style={removeBtnStyle} onClick={() => removeItem(index, specialisationsData, setSpecialisationsData)}>Remove Specialisation</button>
                  </div>
                ))}
                <button style={addBtnStyle} onClick={() => addItem({ name: "New Specialisation", url: "", description: "Description here...", softwareSkills: [] }, specialisationsData, setSpecialisationsData)}>+ Add New Specialisation</button>
              </div>

              {/* 7. Awards */}
              <div>
                <h2 style={headerStyle}>7. Awards</h2>
                {awardsData.map((award, index) => (
                  <div key={index} style={cardStyle}>
                    <input name="title" value={award.title} onChange={(e) => handleArrayChange(index, e, awardsData, setAwardsData)} style={inputStyle} placeholder="Award Title" />
                    <input name="company" value={award.company} onChange={(e) => handleArrayChange(index, e, awardsData, setAwardsData)} style={inputStyle} placeholder="Company" />
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "12px" }}>Logo Path</label>
                        <input name="logo_path" value={award.logo_path} onChange={(e) => handleArrayChange(index, e, awardsData, setAwardsData)} style={inputStyle} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "12px" }}>Theme Color</label>
                        <input name="color" value={award.color} onChange={(e) => handleArrayChange(index, e, awardsData, setAwardsData)} style={inputStyle} placeholder="#HEXCODE" />
                      </div>
                    </div>
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
                Select all text below (Ctrl+A), Copy (Ctrl+C), and Paste (Ctrl+V) directly over your entire <strong>src/portfolio.js</strong> file.
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