import { v4 as uuidv4 } from "uuid";
import todoApp from "./img/todo-desktop-preview.jpg";
import ipTracking from "./img/ip-address-tracking-desktop-preview.jpg";
import urlShortening from "./img/url-shortening-landing-page-desktop-preview.jpg";
import beatMachineMaker from "./img/portfolio-page-icons/beatmachine-maker-img.jpg";
import musicPlayer from "./img/portfolio-page-icons/music-player.PNG";
import clockApp from "./img/clock-app.jpg";
import githubUserSearch from "./img/github-user-search.jpg";

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
      liveSite: "https://modern-todo-app.netlify.+app/",
      source: "https://github.com/Medici305/Todo_App",
      id: uuidv4(),
      even: false,
    },
    {
      image: beatMachineMaker,
      name: "BeatMachine Maker",
      description:
        "Practice object programming language by creating a music application where you are able to create and produce your own beat using three instruments.",
      detail:
        "No matter how much we wanna perceive ourselves to be these logical people. At the end of the day we are creatives and creatives suffer without exposure to creativity. Music is the ultimate form of expression and i brought this to life through this project. Each square pad will play a noteso you free to be as creative as you want. Play and stop functionality is included by clicking on play button and the note will stop/play from last played note. If you feel you want a different instrument the option to do so is there i have included three alternative sounds for each instrument. Mute functionality if you want to specifically only hear certain instruments how it will sound without others playing. Last feature is the tempo, you can control it from slow to fast the choice is yours. ",
      techStack: "HTML, CSS, JS",
      link: "/beatmachine-maker",
      liveSite: "https://beatmachine-maker-app.netlify.app",
      source: "https://github.com/Medici305/BeatMachine_Maker",
      id: uuidv4(),
      even: true,
    },
    {
      image: clockApp,
      name: "Clock App",
      description:
        "Simple clock application that will display time and user has ability to shift throught random quotes from famous influencers.",
      detail:
        "User would load up the site asked permission to use their location if accepted their location would be displayed along side the current time. Added a little fun feature of displaying quotes from famous philophisors. New quotes are illustrated each time user reloads the page or clicks on refresh button. Arbitron will alter respective to period of the day from 'Morning', 'Afternoon', 'Evening' to 'Night'. Icon next to Arbitron will change from moon to sun icon depending on if its night or day. More button slides page up and box will appear with more details regarding day of week, day of year, week of year, etc. CDN GSAP used for animation. Background image will display light image during day and change to dark image at night. This app is also responsive for tablet and mobile usage.",
      techStack: "HTML, Sass, Bootstrap, JavaScript",
      link: "/the-clock-app",
      liveSite: "https://the-clock-app.netlify.app/",
      source: "https://github.com/Medici305/The-clock-app",
      id: uuidv4(),
      even: false,
    },
    {
      image: musicPlayer,
      name: "Music Player",
      description:
        "Music playlist full of Somali classics created using React and Sass.",
      detail: "4",
      techStack: "React, Sass",
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
    {
      image: githubUserSearch,
      name: "Github User Search",
      description:
        "The home to where all your programmers details are displayed. Who you like to find out how many repository your favorite coder has created or maybe search up your own github information?",
      detail: "7",
      techStack: "HTML, Sass, Bootstrap, JavaScript",
      link: "/user-search-app-github",
      liveSite: "https://user-search-app-github.netlify.app/",
      source: "https://github.com/Medici305/user-search-app",
      id: uuidv4(),
      even: true,
    },
  ];
};

export default data;
