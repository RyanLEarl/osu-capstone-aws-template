const fs = require('fs');
const { SsmHelper } = require('../../back-end/src/helpers');

let environment = 'dev';
let stage;

if (process.argv.length > 2) {
  // eslint-disable-next-line
  environment = process.argv[2].toUpperCase();
  // eslint-disable-next-line
  stage = process.argv[2];
}

const paramPath = `/iot-preto/${stage}/db-aurora`;
fs.readFile(`${__dirname}/../../back-end/knexfile.js`, 'utf-8', async (err, file) => {
  try {
    const connectionInfo = await SsmHelper.getParametersByPath(paramPath);
    const outFile = file
      .replace(`${environment}_HOST`, connectionInfo.endpoint)
      .replace(`${environment}_USER`, connectionInfo.user)
      .replace(`${environment}_PASSWORD`, connectionInfo.password);
    fs.writeFile(`${__dirname}/../../back-end/knexfile.js`, outFile, (err, data) => {
      if (err) {
        console.log('Set Knex Error', err);
      }

      console.log('Done writing file', outFile);
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
});
