React Portfolio Maintenance & Update Guide
This document serves as your master reference for updating content, swapping images, and modifying the structure of your React portfolio.
1. Master Content Management (src/portfolio.js)
95% of your future updates will happen exclusively in this single file. You do not need to touch the React component files (.js) or stylesheet files (.css) to change text, add a new job, or update your projects.
Open src/portfolio.js and locate the corresponding constant to update your information:
Portfolio Section	Variable Name in portfolio.js	How to Update
Home Page Hero	greeting	Update full_name, subTitle, or mail.
Social Media Links	socialMediaLinks	Paste your latest profile URLs.
Tech Stack Icons	skills.data[0].softwareSkills	Add a new object: { skillName: "Name", imageSrc: "file.png" }.
Home Page Bullet Points	skills.data	Modify the string arrays under skills for "Technical Expertise" or "Professional Highlights".
Experience / Certs	experience.sections	Add or edit objects containing title, company, duration, description, and logo_path.
Education	degrees	Add or edit university/school data and dates.
Projects	projects.data	Add new objects with name, description (use \n for line breaks), and softwareSkills array.
Specialisation	specialisations.data	Same format as projects. Leave softwareSkills: [] empty if no logos are needed.
Awards	awards.data	Add new objects with title, company, logo_path, and hex color.
2. Image & Logo Management (src/assests/images/)
Whenever you add a new tech skill, company, or award to portfolio.js, you must place the corresponding image file in the src/assests/images/ folder.
Strict Image Guidelines for Best Results:
⚬ Format: Always use .png files with transparent backgrounds.
⚬ Dimensions: Save as a 1:1 Square (e.g., 512x512 pixels). Center the logo inside the square so it aligns perfectly with other icons.
⚬ Cropping: Crop the transparent space tightly around the logo before placing it on the square canvas so it doesn't appear smaller than others.
⚬ File Naming: Keep names lowercase with no spaces (e.g., oracle.png, sql_server.png). This name must perfectly match the imageSrc or logo_path you type into portfolio.js.
3. Structural & UI Layout Reference
If you need to change fonts, colors, animations, or layout behavior, refer to this directory map to find the exact component and stylesheet.
Visual Element	React Component (.js)	Stylesheet (.css)	Key Features to Modify
Navigation & Menu	src/components/header/Header.js	Header.css	Mobile hamburger animations, neon glows, adding new page links, Dark/Light mode toggle.
Home: Hero & vCard	src/containers/greeting/Greeting.js	Greeting.css	"Scroll Down" bouncing arrow, vCard button alignment, main greeting text size.
Home: Tech Bullet Points	src/containers/skills/SkillSection.js	Skills.css	Light/Dark mode dynamic text highlighting, bullet point font sizes (!important).
Tech Stack Icons	src/components/softwareSkills/SoftwareSkill.js	SoftwareSkill.css	The white backlight behind transparent logos in Dark Mode.
Project & Spec Cards	src/components/ProjectCard/ProjectCard.js	ProjectCard.css	Layout of the large cards, glowing text logic, description font sizes.
Experience & Award Cards	src/components/experienceCard/ExperienceCard.js	ExperienceCard.css	Card height uniformity (min-height), Dark/Light mode text contrast logic.
Specialisation Page Layout	src/pages/specialisation/Specialisation.js	Specialisation.css	Grid structure for the SVG images and stacked cards.
4. Advanced: Adding a Brand New Page
If you want to create a new dedicated page (e.g., /publications or /blog) in the future, follow this 4-step sequence:
1. Create the Folder & Files: Inside src/pages/, create a new folder (e.g., publications). Create Publications.js and Publications.css inside it. Use Specialisation.js as a template for the layout.
2. Add the Data: Open src/portfolio.js, create a new array (e.g., const publications = { data: [...] }), and ensure you add it to the export { ... } list at the very bottom.
3. Update the Router: Open src/containers/Main.js. Import your new component at the top. Add <Route path="/publications" render="{(props)"> <Publications theme="{propss.theme}" {...props}/>} /> into the <Switch> blocks.
4. Add the Menu Button: Open src/components/header/Header.js. Add a new <li> with a <NavLink> pointing to your new /publications route. Add a custom hover color for it in Header.css.
