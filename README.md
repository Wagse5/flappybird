# Flappy Bird Game

This is a Flappy Bird game built with Next.js and playable in a web browser. It can be hosted on Vercel.

## Project Structure

- /FlappyBird
  - /pages
    - index.js
    - _app.js
  - /public
  - /styles
    - globals.css
  - /components
    - FlappyBird.js
    - FlappyBird.test.js
  - package.json
  - README.md
  - next.config.js
  - vercel.json

## How to Run

1. Install dependencies: 
   `
   npm install
   `
2. Run the development server: 
   `
   npm run dev
   `
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Play

1. Click or tap to start the game
2. Keep clicking or tapping to make the bird jump
3. Avoid the obstacles
4. Try to get the highest score!

## Running Tests

To run the unit tests:
npm test

## Deployment

This project is set up to be easily deployed on Vercel.

## Troubleshooting

If you encounter any issues with running the development server, make sure:
1. All dependencies are installed correctly
2. The package.json file contains the correct scripts
3. You are in the correct directory when running the commands

- Updated FlappyBird.test.js with correct imports and test cases
- Installed @babel/preset-react for JSX transformation
- Updated babel.config.js and jest.config.js for proper test setup
+- Completely rewrote FlappyBird.js file to fix syntax errors and improve game mechanics
+- Created gameConfig.js file with predefined difficulty levels (easy, medium, hard)
+- Updated FlappyBird.js to include toggleable game modes
+- Created AutoConfig.js to automatically find optimal game configurations
+- Updated FlappyBird.js to use optimized configurations
+- Initialized Git repository for version control
+- Fixed FlappyBird component and updated tests to match new structure
+- Pushed code to GitHub repository after resolving branch naming issues
+- Updated Next.js and dependencies to resolve deployment issues
+- Updated project configuration for static export
+- Modified build configuration to use Next.js 13+ static export method
+- Added vercel.json configuration file for proper static site routing
+- Removed 'next export' command from build script
+- Updated next.config.js to use 'output: export' for static site generation
