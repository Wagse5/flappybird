import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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
});
