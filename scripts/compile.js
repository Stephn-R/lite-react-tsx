#!/usr/bin/env node
'use strict';

const fs = require('fs');
const chalk = require('chalk');

const htmlFile = `${__dirname}/../src/index.html`;
const distFolder = `${__dirname}/../dist/index.html`;

exports.copyFile = () => {
  console.log(chalk.yellow('Copying HTML file to dist ...'));
  fs.createReadStream(htmlFile).pipe(
    fs.createWriteStream(distFolder)
  );
};
