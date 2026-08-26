/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
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
      fileName: "", // We will remove the large illustration in the component files
      skills: [], // Text removed as requested
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
        { skillName: "Guidewire", imageSrc: "guidewire.png" }
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
      softwareSkills: [], // Removed logos as requested
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
      softwareSkills: [], // Removed logos as requested
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
      duration: "2018",
      descriptions: ["⚡ Alagappa University, Karaikudi, Tamil Nadu"],
      website_link: " ",
    },
    {
      title: "Sri Ramanujar Engineering College",
      subtitle: "B.E.",
      logo_path: "sriramanujar.png",
      alt_name: "Sri Ramanujar Engineering College",
      duration: "2014",
      descriptions: ["⚡ Affiliated to Anna University, Chennai"],
      website_link: " ",
    },
    {
      title: "Gandhi Matric. Higher Secondary School",
      subtitle: "12th (HSC)",
      logo_path: "gandhi.png",
      alt_name: "Gandhi Matric. Higher Secondary School",
      duration: "2010",
      descriptions: ["⚡ Tamil Nadu Board of Secondary Education"],
      website_link: " ",
    },
    {
      title: "Gandhi Matric. Higher Secondary School",
      subtitle: "10th (SSLC)",
      logo_path: "gandhi.png",
      alt_name: "Gandhi Matric. Higher Secondary School",
      duration: "2008",
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
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
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
      name: "CineScope",
      url: "https://github.com/Hrishi1999/CineScope",
      description: "An IMDB-like application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Journalify",
      url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
      description:
        "You personal journaling companion, goals & daily challenges! About 5k+ downloads on Play Store.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "RecipesAPI",
      url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
      description: "Get recipes for hundreds and thousands of dishes",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "opPortfolio",
      url: "https://github.com/Hrishi1999/opPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Cab Security System",
      url: " ",
      description:
        "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Lensinator",
      url: " ",
      description:
        "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Doorbell.io",
      url: "https://github.com/Hrishi1999/Doorbell.io",
      description:
        "A sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TensorflowJS",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Video Summarization",
      url: "https://github.com/Hrishi1999/Video-Summarization",
      description:
        "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Dashboard Activity",
      url: "https://github.com/Hrishi1999/Dashboard.activity",
      description:
        "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Pickle",
      url: " ",
      description:
        "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Health Card",
      url: "",
      description:
        "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Food Classifier",
      url: " ",
      description:
        "A food classifier app using tflite which classfier over 50 Indian Dishes.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Image Clustering",
      url: " ",
      description:
        "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Antivirus",
      url: " ",
      description:
        "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
      ],
    },
    {
      name: "Sugar on Windows",
      url: " ",
      description:
        "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Object + Face Detection",
      url: " ",
      description: "2017 project. Object detection + accurate face detection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Image Captioning with Visual Attention",
      url: " ",
      description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "DalSocial",
      url: " ",
      description:
        "An Android app to meet new people in the university, organize and join events. ",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "simple-icons:kotlin",
          color: "#F18E33",
        },
        {
          name: "Android",
          iconifyClass: "simple-icons:android",
          color: "#3DDC84",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "HalifaxFoodie",
      url: " ",
      description:
        "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "Google Cloud",
          iconifyClass: "logos-google-cloud",
        },
      ],
    },
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