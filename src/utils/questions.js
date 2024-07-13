const parseDifficultyToText = (difficulty) => {
  switch (difficulty) {
    case 1:
      return "Fácil";

    case 2:
      return "Media";

    case 3:
      return "Difícil";

    default:
      return "Fácil";
  }
};

export { parseDifficultyToText };
