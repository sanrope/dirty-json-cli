#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var dJSON = require('dirty-json');
// https://github.com/RyanMarcus/dirty-json

var json = path.normalize(process.argv[2]);
var source = fs.readFileSync(json, "utf8");
let r = dJSON.parse(source)
fs.writeSync(fs.openSync(json,'w+'), JSON.stringify(r), 0, "utf8");
process.exit(0)
