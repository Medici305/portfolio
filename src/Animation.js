export const popupLink = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "anticipate",
    },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.1,
    //y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideProject = {
  hidden: {
    x: "200%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  exit: {
    x: "-200%",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
