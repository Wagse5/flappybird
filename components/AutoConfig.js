import { gameModes } from './gameConfig';

// Function to simulate playing the game
const simulateGame = (config) => {
  let score = 0;
  let birdPosition = 300; // Start in the middle
  let pipePosition = 400;
  let pipeHeight = Math.random() * 300;

  for (let i = 0; i < 1000; i++) { // Simulate 1000 frames
    birdPosition += config.gravity;
    if (Math.random() < 0.1) { // 10% chance to jump each frame
      birdPosition -= config.jumpStrength;
    }
    pipePosition -= config.gameSpeed;

    if (pipePosition <= 0) {
      score++;
      pipePosition = 400;
      pipeHeight = Math.random() * 300;
    }

    if (birdPosition <= 0 || birdPosition >= 600 ||
        (pipePosition < 20 && (birdPosition < pipeHeight || birdPosition > pipeHeight + 150))) {
      return score;
    }
  }
  return score;
};

// Function to find optimal configuration
export const findOptimalConfig = () => {
  let easyConfig = { ...gameModes.easy };
  let mediumConfig = { ...gameModes.medium };
  let hardConfig = { ...gameModes.hard };

  for (let i = 0; i < 100; i++) { // Run 100 iterations
    let easyScore = simulateGame(easyConfig);
    let mediumScore = simulateGame(mediumConfig);
    let hardScore = simulateGame(hardConfig);

    if (hardScore >= 10) {
      hardConfig.gravity += 0.05;
      hardConfig.gameSpeed += 0.1;
    } else if (hardScore < 5) {
      hardConfig.gravity -= 0.05;
      hardConfig.gameSpeed -= 0.1;
    }

    if (mediumScore >= 25 || mediumScore < 10) {
      mediumConfig.gravity += 0.05;
      mediumConfig.gameSpeed += 0.1;
    } else if (mediumScore < 15) {
      mediumConfig.gravity -= 0.05;
      mediumConfig.gameSpeed -= 0.1;
    }

    if (easyScore >= 50 || easyScore < 25) {
      easyConfig.gravity += 0.05;
      easyConfig.gameSpeed += 0.1;
    } else if (easyScore < 35) {
      easyConfig.gravity -= 0.05;
      easyConfig.gameSpeed -= 0.1;
    }
  }

  return { easy: easyConfig, medium: mediumConfig, hard: hardConfig };
};
