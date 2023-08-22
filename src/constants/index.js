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
    ecommerceadmin,
    ecommercestore,
    gpt3,
    gerichtapp,
    bankapp,
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
      name: "Bank Application",
      description:
        "A contemporary online banking application featuring a visually appealing homepage, a section outlining the offered features, and convenient links to mobile applications. Abundant calls to action are strategically placed to encourage users to experience the application firsthand.",
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
      image: bankapp,
      source_code_link: "https://github.com/GowriP/bank_modern_app",
    },
    {
      name: "Gericht Restaurant",
      description:
        "An elegant online front-end for fine dining, featuring beautifully designed sections such as About Us, History, and Menu. The application includes a seamlessly scrollable Photo Gallery and integrated Videos to enhance the user experience.",
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
      image: gerichtapp,
      source_code_link: "https://github.com/GowriP/gerich_restaurant_application",
    },
    {
      name: "React Website - GPT3",
      description:
        "A platform highlighting GPT-3 by OpenAI, spotlighting its versatility for chatbots, knowledgebases, and education. Users are encouraged to secure early access. The website further houses enlightening blog articles, delving into GPT-3's revolutionary influence across diverse industries.",
        tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "white-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gpt3,
      source_code_link: "https://github.com/GowriP/react_website_gpt3",
    },
    {
      name: "Ecommerce Admin Application",
      description:
        "An all-encompassing inventory management platform empowering store managers to oversee products categorized by types, colors, sizes, and displays. Additionally, it enables them to analyze revenue trends and delve into the order history of an online storefront.",
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
      image: ecommerceadmin,
      source_code_link: "https://github.com/GowriP/ecommerce-admin",
    },
    {
      name: "Ecommerce Store Application",
      description:
        "A digital retail storefront seamlessly showcasing products from the Ecommerce Admin Store, seamlessly integrated with Stripe Payment, and efficiently deployed on the Vercel App",
        tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommercestore,
      source_code_link: "https://github.com/GowriP/ecommerce-store",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };