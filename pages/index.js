import React from 'react';
import FlappyBird from '../components/FlappyBird';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Flappy Bird</h1>
      <FlappyBird />
    </div>
  );
}
