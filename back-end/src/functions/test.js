const { Response } = require('./helpers');

exports.handler = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false; /* eslint no-param-reassign: 0 */
  const body = JSON.parse(event.body);
  console.log(body);
  return new Response("test success").success();
};