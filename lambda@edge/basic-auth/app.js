'use strict';
require('dotenv').config();

exports.lambdaHandler = async (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  const authUser = process.env.AUTH_USER;
  const authPass = process.env.AUTH_PASS;

  const authString =
    'Basic ' + Buffer.from(authUser + ':' + authPass).toString('base64');

  if (
    typeof headers.authorization == 'undefined' ||
    headers.authorization[0].value != authString
  ) {
    const body = 'Unauthorized';
    const response = {
      status: 401,
      statusDescription: 'Unauthorized',
      headers: {
        'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }],
      },
      body: body
    };
    return response;
  }

  return request;
};
