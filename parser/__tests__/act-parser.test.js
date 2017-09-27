const parsedActDecorator = require('../parsedActDecorator');
const fs = require('fs');

const testActText = fs.readFileSync(__dirname + '/../act5.act', 'utf8');

describe('the shape of an act', () => {
  let parsedAct = null;
  beforeEach(() => {
    parsedAct = parsedActDecorator.parse(testActText);
  });

  afterEach(() => {
    parsedAct = null;
  });

  it('should contain a pages object at its root', () => {
    expect(parsedAct.pages).toBeDefined();
  });

  it('each page should have an id that is the same as its value', () => {
    expect(parsedAct.pages._init.id).toEqual("_init");
  });

  it('each page should have an array of lines', () => {
    expect(parsedAct.pages._init.lines.length).toBeGreaterThan(0);
  });

  it('each line should have parts', () => {
    expect(parsedAct.pages._init.lines[0].parts).toBeDefined();
  });

  it('should map links', () => {
    let firstLink = parsedAct.pages._init.lines[0].parts[2];
    expect(firstLink.type).toEqual("link-page");
    expect(firstLink.text).toEqual("highway");
    expect(firstLink.target).toEqual("highway");
  });

});
