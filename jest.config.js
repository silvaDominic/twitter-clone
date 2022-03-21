module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 80,
      lines: 80,
      statements: -10,
    }
  }
};