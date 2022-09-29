const { clientPath } = require('../configs/config');

const serveClient = (req, res) => {
    res.sendFile(clientPath + '/index.html');
};

const notFound = (req, res, next) => {
    res.sendFile(clientPath + '/index.html');
};

const test = (req, res) => {
    res.status(200).end();
};

module.exports = { serveClient, notFound, test };