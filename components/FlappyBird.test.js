import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlappyBird from './FlappyBird';

describe('FlappyBird', () => {
  test('renders without crashing', () => {
    render(<FlappyBird />);
    expect(screen.getByText('Click to start')).toBeInTheDocument();
  });

  test('starts game on click', () => {
    render(<FlappyBird />);
    fireEvent.click(screen.getByText('Click to start'));
    expect(screen.queryByText('Click to start')).not.toBeInTheDocument();
  });

  test('displays score', () => {
    render(<FlappyBird />);
    expect(screen.getByText('Score: 0')).toBeInTheDocument();
  });

  test('displays game mode buttons', () => {
    render(<FlappyBird />);
    expect(screen.getByText('Easy')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Hard')).toBeInTheDocument();
  });

  test('displays current game mode', () => {
    render(<FlappyBird />);
    expect(screen.getByText('Current Mode: medium')).toBeInTheDocument();
  });
});
