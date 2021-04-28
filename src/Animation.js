export const dropdown = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "anticipate",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.75,
      ease: "anticipate",
    },
  },
};

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
