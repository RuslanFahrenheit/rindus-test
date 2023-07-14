module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleDirectories: ['<rootDir>', 'node_modules'],
  modulePathIgnorePatterns: ['mocks'],
};
