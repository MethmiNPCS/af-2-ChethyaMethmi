// jest.config.js
import { jest } from '@jest/globals'; // Add this import to handle jest globals in ESM

// Jest setup file for @testing-library/jest-dom
import '@testing-library/jest-dom';  // Adjusted import

export default {
  testEnvironment: 'jest-environment-jsdom',  // Use jsdom as test environment
  setupFilesAfterEnv: ['@testing-library/jest-dom'],  // For jest-dom matchers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Ensure Babel is used for transformation
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],  // Support for JS/JSX/TSX files
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],  // Ignore node_modules and dist directories
};
