const path = require('path');
const chalk = require('chalk');

module.exports = {
    development: {
        port: 3001,
        mongoURI: `mongodb://localhost:27017/${process.env.COLLECTION_NAME}`,
        morgan: `${chalk.yellow(':method')} ${chalk.blue(':url')} ${chalk.red(':status')} ${chalk.dim(':date[iso]')}`,
    },
    production: {
        port: process.env.PORT,
        mongoURI: process.env.MONGO_URI,
        morgan: 'combined',
    },
    jwtSecret: process.env.JWT_SECRET,
    clientPath: path.join(__dirname, '../..', 'client', 'build'),
    cookieName: process.env.COOKIE_NAME,
    expiresSeconds: Number(process.env.EXPIRES_SECONDS),
    expiresIn: process.env.EXPIRES_IN,
};