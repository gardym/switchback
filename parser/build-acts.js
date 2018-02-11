const util = require('util');
const fs = require('fs');
const parsedActDecorator = require('./parsedActDecorator');

const actsToParse = ['act5', 'act1'];

actsToParse.forEach(act => {
  const act5Text = fs.readFileSync(`${__dirname}/${act}.act`, 'utf8');
  const results = parsedActDecorator.parse(act5Text);
  fs.writeFileSync(`${__dirname}/../src/acts/${act}.json`, JSON.stringify(results));
});
