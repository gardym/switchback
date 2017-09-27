const actParser = require('./act-parser');
const util = require('util');

const parsedActDecorator = function(actText) {
  const parsedAct = actParser.parse(actText);

  //console.log(util.inspect(parsedAct), { depth: null });

  const cleanLines = parsedAct.map((l, idx) => {
    if(!l || !l.line || l.line.length === 0) {
      return null;
    } else if(l.line[0].type && l.line[0].type === "page") {
      return l.line[0];
    } else {
      return {
        type: "line",
        parts: l.line.reduce((memo, val) => {
          return memo.concat(val);
        }, [])
      };
    }
  }).filter(l => {
    return l !== null && l !== undefined;
  });

  let pages = { };
  let currentPage = { };

  for(let i = 0; i < cleanLines.length; i++) {
    if(cleanLines[i].type === "page") {
      currentPage = Object.assign({}, {
        id: cleanLines[i].id,
        lines: [ ]
      });

      pages[cleanLines[i].id] = currentPage;
    } else if(cleanLines[i].type === "line") {
      currentPage.lines.push({
        parts: cleanLines[i].parts
      });
    }
  }

  return {
    pages: pages
  };
};

module.exports = {
  parse: parsedActDecorator
};
