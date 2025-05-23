/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
  collectCoverage: true,
  transform: {
    '^.+\\.ts?$': ['ts-jest', {}],
    '^.+\\.mjs$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!@faker-js|json-schema-faker)']
}
