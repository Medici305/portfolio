import { v4 as uuidv4 } from "uuid";
import todoApp from "./img/todo-desktop-preview.jpg";
import huddleBootstrap from "./img/huddle-desktop-preview.jpg";
import Blogr from "./img/blogr-desktop-preview.jpg";
import ipTracking from "./img/ip-address-tracking-desktop-preview.jpg";
import urlShortening from "./img/url-shortening-landing-page-desktop-preview.jpg";
import beatMachineMaker from "./img/portfolio-page-icons/beatmachine-maker-img.png";

const data = () => {
  return [
    {
      image: todoApp,
      name: "Todo App",
      description:
        "The classic todo app with a few twists! This app includes a dark/light theme toggle. Simple and awesome app to organize your tasks with very easy to use interface.",
      detail:
        "The best way to learn something is by doing. After completing the basic js concepts the cliche to-do list application was the first project I built to help implement my new skills. This project was designed to test your understanding of variables, arrays, functions, and scope. I also went ahead and added a bonus feature of dark mode which reduces eye strain. In this app a user will be able to add new tasks to be done, delete tasks, mark tasks after completing, filter our tasks on basis of completed or incomplete tasks. Data is saved to local storage so if you were to close the window or refresh the page the tasks you have added to the list will remain until you decide to delete them.  There is a number at the bottom that illustrates the number of tasks on the list. This number will increment as you add more tasks and decrements as you remove a task.",
      techStack: "HTML, SASS, JS",
      link: "/todo-app",
      liveSite: "https://modern-todo-app.netlify.app/",
      source: "https://github.com/Medici305/Todo_App",
      id: uuidv4(),
      even: false,
    },
    {
      image: beatMachineMaker,
      name: "BeatMachine Maker",
      description:
        "This small homepage challenge packs a big punch to test your layout skills. There's also a slider in there to add a JS layer for extra practice.",
      detail: "2",
      techStack: "HTML, CSS, JS",
      link: "/beatmachine-maker",
      liveSite: "https://beatmachine-maker-app.netlify.app",
      source: "https://github.com/Medici305/BeatMachine_Maker",
      id: uuidv4(),
      even: true,
    },
    {
      image: huddleBootstrap,
      name: "Huddle Bootstrap",
      description:
        "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
      detail: "3",
      techStack: "HTML, Sass, JavaScript",
      link: "/huddle-bootstrap",
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
      detail: "4",
      techStack: "HTML, Sass, JavaScript",
      link: "/blogr",
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
      detail: "5",
      techStack: "HTML, Sass, JavaScript",
      link: "/ip-address-tracker",
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
      detail: "6",
      techStack: "HTML, Sass, JavaScript",
      link: "/url-shortening-api-landing-api",
      liveSite: "https://url-shortening-landing-page.netlify.app/",
      source: "https://github.com/Medici305/URL-shortening-API-landing-page",
      id: uuidv4(),
      even: true,
    },
  ];
};

export default data;
