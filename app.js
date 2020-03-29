const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  dust = require('dust'),
  consolidate = require('consolidate'),
  dustJsHelpers = require('dustjs-helpers'),
  pg = require('pg'),
  app = express();

const connect =
  'postgresql://houseProjects:r32rDSk!@database.server.com:3211/houseProjects';

//set dust
app.engine('dust', cons.dust);

app.set;
