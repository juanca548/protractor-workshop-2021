import { Config, browser } from 'protractor';
import awesomeReport from './helpers/awesome-report';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu'],
    },
  },
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
  },
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
    reporter();
    awesomeReport();
  },
};
