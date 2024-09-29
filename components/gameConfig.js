// Game difficulty configurations
export const gameModes = {
  easy: {
    gravity: 0.3,
    jumpStrength: 8,
    gameSpeed: 3,
  },
  medium: {
    gravity: 0.5,
    jumpStrength: 10,
    gameSpeed: 5,
  },
  hard: {
    gravity: 0.7,
    jumpStrength: 12,
    gameSpeed: 7,
  },
};

// Function to find optimal configuration
export const findOptimalConfig = (score) => {
  if (score < 10) {
    return gameModes.easy;
  } else if (score < 20) {
    return gameModes.medium;
  } else {
    return gameModes.hard;
  }
};
