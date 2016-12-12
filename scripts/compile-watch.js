#!/usr/bin/env node
const fs = require('fs');
// const chalk = require('chalk');

const sourceFolder = `${__dirname}/../src`;

const copyFile = require('./compile').copyFile;

// Watch the main HTML file
fs.watch(sourceFolder, (eventType, filename) => {
  if (eventType === 'change' && filename === 'index.html') {
    copyFile();
  }
});
