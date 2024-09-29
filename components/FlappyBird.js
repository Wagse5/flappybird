import React, { useState, useEffect, useCallback } from 'react';
import { gameModes } from './gameConfig';
import { findOptimalConfig } from './AutoConfig';

// Game constants
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;
const BIRD_SIZE = 20;
const PIPE_WIDTH = 50;
const PIPE_GAP = 150;

const FlappyBird = () => {
  // State variables
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [pipeHeight, setPipeHeight] = useState(0);
  const [pipeLeft, setPipeLeft] = useState(GAME_WIDTH);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState('medium');
  const [optimizedConfig, setOptimizedConfig] = useState(null);

  // Configuration state variables
  const [gravity, setGravity] = useState(gameModes.medium.gravity);
  const [jumpStrength, setJumpStrength] = useState(gameModes.medium.jumpStrength);
  const [gameSpeed, setGameSpeed] = useState(gameModes.medium.gameSpeed);

  useEffect(() => {
    const optConfig = findOptimalConfig();
    setOptimizedConfig(optConfig);
  }, []);

  // Handle click event to start game and make bird jump
  const handleClick = useCallback(() => {
    if (!gameHasStarted) {
      setGameHasStarted(true);
    }
    setBirdPosition((prev) => prev - jumpStrength);
  }, [gameHasStarted, jumpStrength]);

  // Game loop
  useEffect(() => {
    let intervalId;
    if (gameHasStarted) {
      intervalId = setInterval(() => {
        setBirdPosition((prev) => prev + gravity);
        setPipeLeft((prev) => {
          if (prev <= -PIPE_WIDTH) {
            setScore((prev) => prev + 1);
            return GAME_WIDTH;
          }
          return prev - gameSpeed;
        });
      }, 24);
    }
    return () => clearInterval(intervalId);
  }, [gameHasStarted, gravity, gameSpeed]);

  // Generate new pipe
  useEffect(() => {
    if (pipeLeft <= -PIPE_WIDTH) {
      setPipeHeight(Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP)));
    }
  }, [pipeLeft]);

  // Collision detection
  useEffect(() => {
    const hasCollidedWithPipe =
      pipeLeft < BIRD_SIZE &&
      pipeLeft > -PIPE_WIDTH &&
      (birdPosition < pipeHeight || birdPosition > pipeHeight + PIPE_GAP);

    if (
      birdPosition > GAME_HEIGHT - BIRD_SIZE ||
      birdPosition < 0 ||
      hasCollidedWithPipe
    ) {
      setGameHasStarted(false);
      setBirdPosition(GAME_HEIGHT / 2);
      setPipeLeft(GAME_WIDTH);
      setScore(0);
    }
  }, [birdPosition, pipeHeight, pipeLeft]);

  // Handle game mode change
  const handleModeChange = (mode) => {
    setGameMode(mode);
    const config = optimizedConfig ? optimizedConfig[mode] : gameModes[mode];
    setGravity(config.gravity);
    setJumpStrength(config.jumpStrength);
    setGameSpeed(config.gameSpeed);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
          backgroundColor: 'skyblue',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Bird */}
        <div
          style={{
            position: 'absolute',
            top: birdPosition,
            left: 50,
            width: BIRD_SIZE,
            height: BIRD_SIZE,
            backgroundColor: 'yellow',
            borderRadius: '50%',
          }}
        />
        {/* Pipes */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: pipeLeft,
            width: PIPE_WIDTH,
            height: pipeHeight,
            backgroundColor: 'green',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: pipeHeight + PIPE_GAP,
            left: pipeLeft,
            width: PIPE_WIDTH,
            height: GAME_HEIGHT - pipeHeight - PIPE_GAP,
            backgroundColor: 'green',
          }}
        />
        {/* Start message */}
        {!gameHasStarted && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            Click to start
          </div>
        )}
        {/* Score */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Score: {score}
        </div>
      </div>
      {/* Game mode buttons */}
      <div>
        <button onClick={() => handleModeChange('easy')}>Easy</button>
        <button onClick={() => handleModeChange('medium')}>Medium</button>
        <button onClick={() => handleModeChange('hard')}>Hard</button>
      </div>
      {/* Current mode display */}
      <div>Current Mode: {gameMode}</div>
    </div>
  );
};

export default FlappyBird;
