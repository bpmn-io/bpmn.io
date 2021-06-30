'use strict';

const { createServer } = require('./app');

// exit process on SIGINT
process.on('SIGINT', function() {
  process.exit();
});

// start server
run();


// helpers //////////////////////

function now() {
  return new Date().toString();
}

function run() {

  const config = getConfig();

  const {
    port,
    hostname,
    env
  } = config;

  const app = createServer(config);

  app.listen(port, hostname, function() {
    console.log('[%s] [server] listening at %s:%d (mode: %s)', now(), hostname, port, env);

    if (env === 'development') {
      const open = require('open');

      open(`http://${hostname}:${port}`);
    }
  });

}

function getEnv(name, defaultValue) {
  return process.env[name] || defaultValue;
}

function getConfig() {

  const env = getEnv('NODE_ENV', 'production');
  const port = getEnv('PORT', 9012);
  const hostname = getEnv('HOST', '0.0.0.0');

  return {
    port,
    hostname,
    env
  };
}