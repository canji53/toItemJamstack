'use strict';
const context = require('aws-lambda-mock-context');
const app = require('../app');
const event = require('./event');
require('dotenv').config();

/**
 * /contact:[POST] TEST
 */
describe('app.lambdaHandler()', () => {

  beforeEach(() => {
    jest.resetModules();
  });

  describe('[成功]basic認証', () => {
    test('認証成功', async () => {
      let authString = 'Basic ';
      authString += Buffer.from(process.env.AUTH_USER + ':' + process.env.AUTH_PASS).toString('base64');
      event.Records[0].cf.request.headers.authorization = [{ value: authString }];
      const response = await app.lambdaHandler(event, context({timeout:10}), function(){});
      expect(response.status).toBeUndefined();
    });
  });

  describe('[失敗]basic認証', () => {
    test('ユーザー名が間違っている', async () => {
      let authString = 'Basic ';
      authString += Buffer.from('hogeUser' + ':' + process.env.AUTH_PASS).toString('base64');
      event.Records[0].cf.request.headers.authorization = [{ value: authString }];
      const response = await app.lambdaHandler(event, context({timeout:10}), function(){});
      expect(response.status).toBe(401);
    });

    test('パスワードが間違っている', async () => {
      let authString = 'Basic ';
      authString += Buffer.from(process.env.AUTH_USER + ':' + 'hogePass').toString('base64');
      event.Records[0].cf.request.headers.authorization = [{ value: authString }];
      const response = await app.lambdaHandler(event, context({timeout:10}), function(){});
      expect(response.status).toBe(401);
    });

    test('ユーザー名とパスワードの両方が間違っている', async () => {
      let authString = 'Basic ';
      authString += Buffer.from('hogeUser' + ':' + 'hogePass').toString('base64');
      event.Records[0].cf.request.headers.authorization = [{ value: authString }];
      const response = await app.lambdaHandler(event, context({timeout:10}), function(){});
      expect(response.status).toBe(401);
    });
  });
});
