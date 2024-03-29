// export default {
//   moduleNameMapper: {
//     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
//   },
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//     // process `*.tsx` files with `ts-jest`
//   },
// }

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
}
