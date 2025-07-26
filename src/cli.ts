import { createCli } from 'json-type-cli';
import { router } from './router';

// Create and run CLI
const cli = createCli({
  router,
  version: 'v0.0.0',
  cmd: 'CHANGEME'
});
cli.run();
