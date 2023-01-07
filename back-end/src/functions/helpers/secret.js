const AWS = require('@aws-sdk/client-secrets-manager');
const client = new AWS.SecretsManager({region: process.env.region});

module.exports = {
  getSecret: async secretName => {
    try {
      const res = await client.getSecretValue({ SecretId: secretName });
      return JSON.parse(res.SecretString);
    } catch (err) {
      console.error(err);
      return 'ERROR';
    }
  }
};
