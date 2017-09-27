const actParser = require('./act-parser');
const util = require('util');

const flatten = function(arr) {
  return arr.reduce((memo, val) => {
    return memo.concat(val);
  }, []);
};

const cleanParts = function(parts) {
  return parts.reduce((memo, val) => {
    if(typeof val === "string") {
      if(typeof memo[memo.length - 1] === "string") {
        memo[memo.length - 1] = memo[memo.length - 1 ] + val;
      } else {
        memo.push(val);
      }
    } else {
      let changes = { };

      if(val.type === "link-page" && Array.isArray(val.text)) {
        changes.text = flatten(val.text[2]).join("");
      } else if(val.type === "link-item" && Array.isArray(val.text)) {
        changes.text = flatten(val.text).join("");
      } else if(val.type === "link-hotspot" && Array.isArray(val.text)) {
        changes.text = flatten(val.text).join("");
        changes.tip = flatten(val.tip).join("");
      }
      memo.push(Object.assign({}, val, changes));
    }
    return memo;
  }, [ ]);
};

const parsedActDecorator = function(actText) {
  const parsedAct = actParser.parse(actText);

  const cleanLines = parsedAct.map((l, idx) => {
    if(!l || !l.line || l.line.length === 0) {
      return null;
    } else if(l.line[0].type && l.line[0].type === "page") {
      return l.line[0];
    } else {
      return {
        type: "line",
        parts: flatten(l.line)
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

    } else if(cleanLines[i].type === "line" && !cleanLines[i].parts[0].rule) {

      currentPage.lines.push({
        parts: cleanParts(cleanLines[i].parts)
      });

    } else if(cleanLines[i].type === "line" && cleanLines[i].parts[0].rule) {
      const predicatePart = cleanLines[i].parts[0];

      const condition = {
        type: predicatePart.type,
        rule: predicatePart.rule,
        value: flatten(predicatePart.value[0]).filter(v => {
          return v && v !== ",";
        })
      };

      currentPage.lines.push({
        condition: condition,
        parts: cleanParts(flatten(cleanLines[i].parts[2]))
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
