require('dotenv').config({ path: '../../.env' });
const config = require('./configs/config')[process.env.NODE_ENV];

const express = require('express');
const mongoose = require('mongoose');
const helmet = require("helmet");
const cors = require("cors");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const appRouter = require('./routes/appRouter');
const authRouter = require('./routes/authRouter');
const { clientPath } = require('./configs/config');
const { jwtParser } = require('./middlewares/authMiddleware');

const app = express();
const log = console.log;

(async () => {
  await mongoose.connect(config.mongoURI);
  log('MongoDb connection established');
})().catch(log);

app.use(cors());
app.use(helmet());
app.use(morgan(config.morgan));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(clientPath));
app.use(jwtParser);

app.use('/', appRouter);
app.use('/auth', authRouter);
app.use('*', appRouter);

app.listen(config.port, () =>
    log(`Server running on port http://localhost:${config.port}`));