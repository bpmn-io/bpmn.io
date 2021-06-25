'use strict';

const path = require('path');

const compression = require('compression');

const express = require('express');

const st = require('st');


function createServer(config) {

  const {
    env,
    port,
    hostname
  } = config;

  const app = express();

  app.set('port', port);
  app.set('env', env);
  app.set('hostname', hostname);

  if (env === 'development') {
    app.use(loggingMiddleware());
  }

  app.use(compression());

  if (process.env.FORCE_HTTPS) {
    app.use(useHttps());
  }

  // serve website with static handler
  app.use(staticHandler(path.join(__dirname, 'dist')));

  return app;
}

module.exports.createServer = createServer;


// helpers ////////////////////////
function loggingMiddleware() {
  var logger = require('morgan');

  return logger('dev');
}

function useHttps() {
  return function(req, res, next) {

    if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
      res.header('strict-transport-security', 'max-age=31536000; preload');

      return next();
    }

    return res.redirect(302, 'https://' + req.get('host') + req.originalUrl);
  };
}

function staticHandler(publicDir) {
  return st({
    path: publicDir,
    index: 'index.html',
    gzip: false,
    passthrough: true
  });
}
