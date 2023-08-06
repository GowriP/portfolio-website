import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    efi,
    getskinhelp,
    carrent,
    jobit,
    tripguide,
    angular,
    python
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "Assoiciate Software Developer",
      company_name: "Electronics For Imaging",
      icon: efi,
      iconBg: "#E6DEDD",
      date: "July 2017 - April 2019",
      points: [
        "Awarded the Fiery Most Valuable Sprinter (MVS) award for the third quarter of 2018 for contributions to project backlog clearing and accelerated application delivery",
        "Researched and developed an innovative Python automation method for application and printer compatibility, resulting in a 55-hour reduction in manpower and $0.3M cost savings",
      ],
      },
    {
      title: "Software Developer",
      company_name: "Electronics For Imaging",
      icon: efi,
      iconBg: "#E6DEDD",
      date: "May 2019 - July 2021",
      points: [
        "Gathered project requirements and introduced new features as the engineering lead; ensured timely project delivery and boosting the NPS score by 30",
        "Increased customer engagement by 43% through data-driven research, optimizing application interface for improved customer satisfaction and retention", 
        "As Scrum Master, coordinated tasks for a team of 15, partnering with the Product Manager to remove impediments and achieve a 27% increase in productivity and overall team collaboration",
      ],
    },
    {
      title: "Associate Product Manager",
      company_name: "Skinopathy",
      icon: getskinhelp,
      iconBg: "#000000",
      date: "May 2022 - July 2022",
      points: [
        "Recruited by the Cofounder as the Product Manager of a D2C native mobile application specializing in AI-powered screening, triaging, and detection of various skin conditions",
        "Led a team of 7 software developers and UX/UI designers in developing the application, empowering over 500 patients, and facilitating their consultations with medical professionals",
        "Incorporated a chatbot to offer emotional support to patients after the detection screen to enhance the overall customer experience of the app resulting in a 38% reduction in churn rate",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bank Modern App",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/GowriP/bank_modern_app",
    },
    {
      name: "Gerich Resturant Application",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/GowriP/gerich_restaurant_application",
    },
    {
      name: "React Website - GPT3",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/GowriP/react_website_gpt3",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };