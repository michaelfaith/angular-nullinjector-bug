/*
 * Copyright (c) 2023 GM Global Technology Operations LLC. All rights reserved.
 * This information is confidential and proprietary to GM Global Technology
 * Operations LLC and may not be used, modified, copied or distributed.
 */

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  reporters: ['default'],
};
