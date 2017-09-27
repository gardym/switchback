const util = require('util');
const fs = require('fs');
const parsedActDecorator = require('./parsedActDecorator');

const act5Text = fs.readFileSync(__dirname + '/act5.act', 'utf8');

const results = parsedActDecorator.parse(act5Text);

fs.writeFileSync(__dirname + '/../src/acts/act5.json', JSON.stringify(results));
