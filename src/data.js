import { v4 as uuidv4 } from "uuid";
import todoApp from "./img/todo-desktop-preview.jpg";
import carouselHomepage from "./img/carousel-desktop-preview.jpg";
import huddleBootstrap from "./img/huddle-desktop-preview.jpg";
import Blogr from "./img/blogr-desktop-preview.jpg";
import ipTracking from "./img/ip-address-tracking-desktop-preview.jpg";
import urlShortening from "./img/url-shortening-landing-page-desktop-preview.jpg";

const data = () => {
  return [
    {
      image: todoApp,
      name: "Todo App",
      description:
        "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
      liveSite: "https://modern-todo-app.netlify.app/",
      source: "https://github.com/Medici305/Todo_App",
      id: uuidv4(),
      even: false,
    },
    {
      image: carouselHomepage,
      name: "Carousel Homepage",
      description:
        "This small homepage challenge packs a big punch to test your layout skills. There's also a slider in there to add a JS layer for extra practice.",
      liveSite: "https://carousel-homepage.netlify.app/",
      source: "https://github.com/Medici305/carousel-homepage",
      id: uuidv4(),
      even: true,
    },
    {
      image: huddleBootstrap,
      name: "Huddle Bootstrap",
      description:
        "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
      liveSite: "https://huddlebootstrap.netlify.app/",
      source: "https://github.com/Medici305/Huddle_Bootsrap",
      id: uuidv4(),
      even: false,
    },
    {
      image: Blogr,
      name: "Blogr Landing Page",
      description:
        "Flex your layout muscles with this landing page challenge. You'll mostly be working with HTML & CSS for this project with a tiny bit of JS for the mobile menu.",
      liveSite: "https://blogr-dynamic-site.netlify.app/",
      source: "https://github.com/Medici305/blogr_dynamic_site",
      id: uuidv4(),
      even: true,
    },
    {
      image: ipTracking,
      name: "IP Address Tracker",
      description:
        "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
      liveSite: "https://ip-address-tracker-2.netlify.app/",
      source: "https://github.com/Medici305/IP_Address_Tracker",
      id: uuidv4(),
      even: false,
    },
    {
      image: urlShortening,
      name: "URL shortening API landing page",
      description:
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge.",
      liveSite: "https://url-shortening-landing-page.netlify.app/",
      source: "https://github.com/Medici305/URL-shortening-API-landing-page",
      id: uuidv4(),
      even: true,
    },
  ];
};

export default data;