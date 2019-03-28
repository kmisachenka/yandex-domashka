import app from './app';
import config from './config';

app.listen(config.port, () => {
  /* eslint-disable no-console */
  console.log(`REST API on port http://localhost:${config.port}/api`);
});
