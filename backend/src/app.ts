import * as express from 'express';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';
import * as morgan from 'morgan';
import * as errorhandler from 'errorhandler';
import * as compression from 'compression';

import errorApiHandler from './middlewares/errorHandler';
import notesRouter from './notes/notes.router';

const app: express.Application = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(compression());

if (process.env.NODE_ENV !== 'testing') {
  app.use(morgan('combined'));
}

if (process.env.NODE_ENV !== 'production') {
  app.use(errorhandler());
}

app.use(errorApiHandler);

app.use('/api/notes', notesRouter);

app.use(express.static(path.resolve('..', 'frontend', 'build')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve('..', 'frontend', 'build', 'index.html'));
});

export default app;
