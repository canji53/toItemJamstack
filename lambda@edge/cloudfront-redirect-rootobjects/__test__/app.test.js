'use strict';
const context = require('aws-lambda-mock-context');
const app = require('../app');
const event = require('./event');

/**
 * /contact:[POST] TEST
 */
describe('app.lambdaHandler()', () => {

  beforeEach(() => {
    jest.resetModules();
  });

  describe('[成功]uri変換', () => {
    test('"/"を"/index.html"に変換', async () => {
      event.Records[0].cf.request.uri = '/';
      const response = await app.lambdaHandler(event, context(), function(){});
      expect(response.uri).toBe('/index.html');
    });

    test('"/xxx"を"/xxx/index.html"に変換', async () => {
      event.Records[0].cf.request.uri = '/kdsokdosk';
      const response = await app.lambdaHandler(event, context(), function(){});
      expect(response.uri).toBe('/kdsokdosk/index.html');
    });

    test('"/xxx/"を"/xxx/index.html"に変換', async () => {
      event.Records[0].cf.request.uri = '/kdsokdosk/';
      const response = await app.lambdaHandler(event, context(), function(){});
      expect(response.uri).toBe('/kdsokdosk/index.html');
    });

    test('"/xxx/favicon.ico"を"/favicon.ico"に変換', async () => {
      event.Records[0].cf.request.uri = '/kdsok/dosk/favicon.ico';
      const response = await app.lambdaHandler(event, context(), function(){});
      expect(response.uri).toBe('/favicon.ico');
    });
  });
});
