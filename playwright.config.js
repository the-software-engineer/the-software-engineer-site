/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    command: 'npm run preview',
    port: 4173,
  },
};

export default config;
