/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, 
  useCustomCursor: false, 
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello",
  title2: "Prasath",
  logo_name: "Prasath N",
  nickname: " ",
  full_name: "Prasath Narayanasamy",
  subTitle:
    "ETL & Data Integration Specialist | 8+ Years in IT, 7+ in Informatica | AI Enthusiast",
  resumeLink: "#",
  mail: "mailto:n.prasath1024@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/nprasath1024",
  linkedin: "https://in.linkedin.com/in/prasath1024",
  gmail: "n.prasath1024@gmail.com",
  facebook: "https://www.facebook.com/vikky.prasath.2025",
  instagram: "https://www.instagram.com/iam__prasath",
};

const skills = {
  data: [
    {
      title: "ETL Developer",
      fileName: "", 
      skills: [], 
      softwareSkills: [
        { skillName: "Informatica PowerCenter", imageSrc: "informatica_powercenter.png" },
        { skillName: "Oracle", imageSrc: "oracle.png" },
        { skillName: "PL/SQL", imageSrc: "plsql.png" },
        { skillName: "SQL Server", imageSrc: "sql_server.png" },
        { skillName: "Batch Script", imageSrc: "batch_script.png" },
        { skillName: "Unix Script", imageSrc: "unix_script.png" },
        { skillName: "PuTTY", imageSrc: "putty.png" },
        { skillName: "GitHub", imageSrc: "github.png" },
        { skillName: "VS Code", imageSrc: "vscode.png" },
        { skillName: "Guidewire", imageSrc: "guidewire.png" },
        { skillName: "PROCEDE", imageSrc: "procede.png" } 
      ],
    },

    {
      title: "Technical Expertise",
      fileName: "",
      skills: [
        "⚡ Advanced-level working experience in multiple Informatica tools, including PowerCenter, PowerExchange, and IICS",
        "⚡ Databases – Experience in Oracle and Microsoft SQL Server",
        "⚡ Good knowledge in PL/SQL",
        "⚡ Dev Tools – SQL Server Management Studio (SSMS), Toad, PuTTY, Eclipse, UltraEdit",
        "⚡ Version Control – Git, GitHub",
        "⚡ IDEs – Visual Studio Code",
        "⚡ Scripting knowledge in Unix Shell scripting and Batch scripting to trigger ETL jobs",
        "⚡ Job Scheduling & Automation – Good knowledge of creating AutoSys jobs using JIL scripts",
        "⚡ Application/UI knowledge of PROCEDE and Guidewire ClaimCenter",
        "⚡ Project Management Tools – Rally, HP Quality Center (ALM), Jira",
        "⚡ Basic knowledge of Core Java and HTML/CSS"
      ],
      softwareSkills: [], 
    },
    
    {
      title: "Professional Highlights",
      fileName: "",
      skills: [
        "⚡ Good knowledge of Data Warehouse and Data Mart concepts",
        "⚡ Experience resolving online production issues",
        "⚡ Working experience in performance tuning and bottleneck resolution",
        "⚡ Working experience in ETL reconciliation processes and data balancing",
        "⚡ Good experience creating, modifying, and automating unit test cases",
        "⚡ Good experience working in Agile methodology, participating in all phases from planning to sign-off",
        "⚡ Good experience in code release activities, from creating implementation plans to post-checkout validations"
      ],
      softwareSkills: [], 
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Alagappa University",
      subtitle: "MBA (Production & Operations Management)",
      logo_path: "alagappa.png",
      alt_name: "Alagappa University",
      duration: "", 
      descriptions: ["⚡ Alagappa University, Karaikudi, Tamil Nadu"],
      website_link: " ",
    },
    {
      title: "Sri Ramanujar Engineering College",
      subtitle: "B.E.",
      logo_path: "sriramanujar.png",
      alt_name: "Sri Ramanujar Engineering College",
      duration: "", 
      descriptions: ["⚡ Affiliated to Anna University, Chennai"],
      website_link: " ",
    },
    {
      title: "Gandhi Matric. Higher Secondary School",
      subtitle: "12th (HSC)",
      logo_path: "gandhi.png",
      alt_name: "Gandhi Matric. Higher Secondary School",
      duration: "", 
      descriptions: ["⚡ Tamil Nadu Board of Secondary Education"],
      website_link: " ",
    },
    {
      title: "Gandhi Matric. Higher Secondary School",
      subtitle: "10th (SSLC)",
      logo_path: "gandhi.png",
      alt_name: "Gandhi Matric. Higher Secondary School",
      duration: "", 
      descriptions: ["⚡ Tamil Nadu Matriculation Board"],
      website_link: " ",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "ETL and Data Integration Specialist with 8+ years of IT experience and over 7 years of expertise in Informatica PowerCenter, PowerExchange, and IDMC/IICS. Skilled in Oracle PL/SQL, data warehousing, Unix scripting, and Agile delivery. Experienced in leveraging AI tools such as Claude and GitHub Copilot to enhance development productivity, automate repetitive tasks, and accelerate solution delivery. Passionate about building reliable, scalable, and business-focused data integration solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Associate",
          company: "Cognizant Technology Solutions",
          company_url: " ",
          logo_path: "cognizant.png",
          duration: "June 2021 - Present",
          location: "Chennai",
          description: "5+ years",
          color: "#1a3673",
        },
        {
          title: "Software Engineer",
          company: "HCL Technologies",
          company_url: " ",
          logo_path: "hcl.png",
          duration: "March 2017 - May 2021",
          location: "Chennai",
          description: "4 years",
          color: "#004b8d",
        },
      ],
    },
    {
      title: "Certifications",
      experiences: [
        {
          title: "IDMC Cloud Data Integration for PowerCenter Developers",
          company: "Foundation Certification – Informatica",
          company_url: " ",
          logo_path: "informatica_powercenter.png",
          duration: "",
          location: "",
          description: " ",
          color: "#ff6a00",
        },
        {
          title: "Informatica Data Management Cloud (IDMC)",
          company: "Partner Bootcamp – Informatica",
          company_url: " ",
          logo_path: "informatica_powercenter.png",
          duration: "",
          location: "",
          description: " ",
          color: "#ff6a00",
        },
        {
          title: "Informatica PowerCenter: Beginner to Expert Level",
          company: "Udemy",
          company_url: " ",
          logo_path: "Udemy.png",
          duration: "",
          location: "",
          description: " ",
          color: "#a435f0",
        },
        {
          title: "AWS Cloud Practitioner Essentials: Cloud Concepts",
          company: "Amazon Web Services",
          company_url: " ",
          logo_path: "aws.png",
          duration: "",
          location: "",
          description: " ",
          color: "#ff9900",
        },
        {
          title: "Introduction to Cloud Computing",
          company: "Udemy",
          company_url: " ",
          logo_path: "Udemy.png",
          duration: "",
          location: "",
          description: " ",
          color: "#a435f0",
        },
      ],
    },
    {
      title: "Agile / Scrum",
      experiences: [
        {
          title: "Scrum Foundation Professional Certificate (SFPC)",
          company: "CertiProf",
          company_url: " ",
          logo_path: "CertiProf.png",
          duration: "",
          location: "",
          description: " ",
          color: "#1b82e1",
        },
      ],
    },
    {
      title: "Professional / Soft Skills",
      experiences: [
        {
          title: "Communication and Interpersonal Skills at Work",
          company: "University of Leeds & Institute of Coding",
          company_url: " ",
          logo_path: "Leeds.png",
          duration: "",
          location: "",
          description: " ",
          color: "#187a41",
        },
        {
          title: "AI Tools and ChatGPT Workshop",
          company: "Be10x",
          company_url: " ",
          logo_path: "Be10x.png",
          duration: "",
          location: "",
          description: " ",
          color: "#000000",
        },
        {
          title: "Data Science Foundation",
          company: "Cognizant",
          company_url: " ",
          logo_path: "cognizant.png",
          duration: "",
          location: "",
          description: " ",
          color: "#1a3673",
        },
      ],
    }
  ],
};

const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prasath_profile.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      name: "GSS Navigator",
      url: "",
      description: "Domain: Reinsurance | Role: ETL Developer | Methodology: Agile\n\nDesigned and maintained Informatica ETL pipelines to process critical policy, claim, loss, and premium data for a large-scale reinsurance platform. Built automated data flows to ingest source files and load seeded data into the PROCEDE application, and engineered complex ETL logic to retrieve calculated data from PROCEDE for reporting and local database integration. Implemented the e-Distribution process to generate and transmit bills and invoices to reinsurers, and managed data feeds to downstream systems for policy and claim tracking to keep cross-team business reporting aligned. Additionally supported manual data requests through direct loading procedures into PROCEDE, and enabled cash-flow operations and reconciliation processes to track insurer payments. Worked closely with source and downstream teams throughout to ensure seamless integration and accurate financial reporting.",
      softwareSkills: [
        { skillName: "Informatica PowerCenter", imageSrc: "informatica_powercenter.png" },
        { skillName: "Oracle", imageSrc: "oracle.png" },
        { skillName: "PL/SQL", imageSrc: "plsql.png" },
        { skillName: "SQL Server", imageSrc: "sql_server.png" },
        { skillName: "Unix", imageSrc: "unix_script.png" }
      ],
    },
    {
      name: "HFP Integration",
      url: "",
      description: "Domain: Reinsurance | Role: ETL Developer | Methodology: Agile\n\nIntegrated new reinsurance streams by leveraging the GSS Navigator framework, improving code reuse and delivery efficiency. Collaborated with source teams to define database views incorporating specific HSC requirements, and architected advanced Informatica packages to manage core reinsurance processes and dataset synchronization. Ensured seamless end-to-end data flow from staging through calculation and reporting, while maintaining compliance with financial reporting protocols during the integration of specialized billing data. Upheld high performance standards across all data packages to support consistent business alignment.",
      softwareSkills: [
        { skillName: "Informatica PowerCenter", imageSrc: "informatica_powercenter.png" },
        { skillName: "Oracle", imageSrc: "oracle.png" },
        { skillName: "PL/SQL", imageSrc: "plsql.png" },
        { skillName: "SQL Server", imageSrc: "sql_server.png" },
        { skillName: "Unix", imageSrc: "unix_script.png" }
      ],
    },
    {
      name: "System Balancing Specialist – Business Data Validation",
      url: "",
      description: "Domain: Reinsurance | Role: ETL Developer | Methodology: Agile\n\nOwned the data validation and system balancing function within a large-scale integrated reinsurance platform, delivering precise end-to-end reconciliation of financial data across multiple business-rule tables, complex database views, and various packages. Designed and executed balancing checks to verify data integrity and consistency at every stage of the pipeline, from source ingestion through to final reporting. Managed the generation of daily and monthly reports, validating record counts, financial totals, and data accuracy to catch discrepancies before they reached downstream systems. Collaborated with development and business teams to investigate and resolve reconciliation breaks, ensuring reliable financial reporting and maintaining trust in the data across the platform.",
      softwareSkills: [
        { skillName: "Informatica PowerCenter", imageSrc: "informatica_powercenter.png" },
        { skillName: "Oracle", imageSrc: "oracle.png" },
        { skillName: "PL/SQL", imageSrc: "plsql.png" },
        { skillName: "SQL Server", imageSrc: "sql_server.png" },
        { skillName: "Unix", imageSrc: "unix_script.png" }
      ],
    },
    {
      name: "Policy/Billing Center to General Ledger via Data Warehouse",
      url: "",
      description: "Domain: Reinsurance | Role: ETL Developer\n\nDeveloped the end-to-end data migration flow moving accounting data from Policy Center / Billing Center (OLTP) into the Data Warehouse, then into the Data Mart, and finally to the General Ledger database. Engineered a wide range of transformations, aggregations, and business logic to handle the accounting data — including date-specific loads, duplicate removal, and incremental updates that load only new records via target-table lookups — along with a full reconciliation process. Organized the workflows into scheduled batches: daily loads from source to the Data Warehouse, monthly loads from Data Warehouse to Data Mart, and quarterly loads into the General Ledger, which then feeds downstream reporting.",
      softwareSkills: [
        { skillName: "Informatica PowerCenter", imageSrc: "informatica_powercenter.png" },
        { skillName: "SQL Server", imageSrc: "sql_server.png" },
        { skillName: "Batch Script", imageSrc: "batch_script.png" }
      ],
    }
  ],
};

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
};