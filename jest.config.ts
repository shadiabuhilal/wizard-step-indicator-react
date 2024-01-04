import {Config} from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./tests/setupTests.ts'],
    moduleFileExtensions: ['js', 'tsx'],
    injectGlobals: true,
    collectCoverageFrom: [
        'src/**/*.tsx',
        '!**/node_modules/**',
    ],
    coverageReporters: ['lcov', 'text'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};

export default config;