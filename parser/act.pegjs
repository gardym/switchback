
statement
  = (comment / line)+

comment
  = "`" comment:[^\n]* "\n"
  { return null; }

line
  = line:(pageElement
  / predicate "\n  " parts*
  / parts)* "\n"
  { return { line: line } }

pageElement
  = "^" pageId:identifier
  { return {
    type: "page",
    id: pageId
    };
  }

parts
  = ((link / hotspot / text / item) whitespace?)

link
  = "#" id:identifier text:(":" "\"" (text whitespace?)* "\"")?
  {
  return {
    type: "link-page",
    target: id,
    text: text ? text : id
    };
  }

hotspot
  = "@" id:identifier ":" "\"" tip:(text whitespace?)* "\""
  {
  return {
    type: "link-hotspot",
    id: id,
    text: id,
    target: id,
    tip: tip
    };
  }

item
  = "*" id:identifier ":" "\"" text:(text whitespace?)* "\""
  {
  return {
    type: "link-item",
    target: id,
    text: text
    };
  }

predicate
  = "?" type:identifier ":" rule:identifier ":" values:(identifier ","?)+
  {
  return {
    type: type,
    rule: rule,
    value: [ values ]
    };
  }

identifier
  = identifier:[_a-zA-Z0-9]+ { return identifier.join(""); }

text
  = text:[a-zA-Z,.'?:(|)]+ { return text.join(""); }

whitespace
  = ws:[ ]* { return ws.join(""); }
