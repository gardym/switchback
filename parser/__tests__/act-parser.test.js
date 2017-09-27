const util = require('util');
const parsedActDecorator = require('../parsedActDecorator');

describe('the shape of an act', () => {
  it('should contain a pages object at its root', () => {
    const parsedAct = parsedActDecorator.parse("^_init\n");

    expect(parsedAct.pages).toBeDefined();
  });

  it('each page should have an id that is the same as its value', () => {
    const parsedAct = parsedActDecorator.parse("^_init\n");

    expect(parsedAct.pages._init.id).toEqual("_init");
  });

  it('each page should have an array of lines', () => {
    const basicText = ["^_init", "Some plain text", "" ].join("\n");
    const parsedAct = parsedActDecorator.parse(basicText);

    expect(parsedAct.pages._init.lines.length).toBeGreaterThan(0);
  });

  it('each line should have parts', () => {
    const basicText = ["^_init", "Some plain text", "" ].join("\n");
    const parsedAct = parsedActDecorator.parse(basicText);

    expect(parsedAct.pages._init.lines[0].parts).toBeDefined();
  });

  it('should map links', () => {
    const basicText = [
      "^_init",
      "The #highway stretches out.",
      ""].join("\n");
    const parsedAct = parsedActDecorator.parse(basicText);

    let link = parsedAct.pages._init.lines[0].parts[1];
    expect(link.type).toEqual("link-page");
    expect(link.text).toEqual("highway");
    expect(link.target).toEqual("highway");
  });

  it('should map links with text', () => {
    const basicText = [
      "^_init",
      "The #highway:\"dark highway\"",
      ""].join("\n");
    const parsedAct = parsedActDecorator.parse(basicText);

    //console.log(util.inspect(parsedAct, { depth: null }));

    let link = parsedAct.pages._init.lines[0].parts[1];
    expect(link.text).toEqual("dark highway");
    expect(link.target).toEqual("highway");
  });

  it('should map items', () => {
    const basicText = [
      "^_init",
      "Pick up *card:\"small card\" from the ground.",
      ""].join("\n");

    const parsedAct = parsedActDecorator.parse(basicText);

    let item = parsedAct.pages._init.lines[0].parts[1];
    expect(item.target).toEqual("card");
    expect(item.text).toEqual("small card");
    expect(item.type).toEqual("link-item");
  });

  it('should map hotspots', () => {
    const basicText = [
      "^_init",
      "Inspect @ground:\"the ground\":\"it's too dark to see anything\".",
      ""].join("\n");

    const parsedAct = parsedActDecorator.parse(basicText);

    let hotspot = parsedAct.pages._init.lines[0].parts[1];
    expect(hotspot.type).toEqual("link-hotspot");
    expect(hotspot.text).toEqual("the ground");
    expect(hotspot.id).toEqual("ground");
    expect(hotspot.target).toEqual("ground");
    expect(hotspot.tip).toEqual("it's too dark to see anything");
  });

  it('should map predicates', () => {
    const basicText = [
      "^_init",
      "?inventory:contains:poweredCarLamp,safePoweredCarLamp",
      "  You hear an #engine approaching in the distance.",
      ""].join("\n");

    const parsedAct = parsedActDecorator.parse(basicText);

    let predicate = parsedAct.pages._init.lines[0].condition;
    let parts = parsedAct.pages._init.lines[0].parts;

    expect(predicate.type).toEqual("inventory");
    expect(predicate.rule).toEqual("contains");
    expect(predicate.value.length).toEqual(2);
    expect(predicate.value[0]).toEqual("poweredCarLamp");
    expect(predicate.value[1]).toEqual("safePoweredCarLamp");

    expect(parts[0]).toEqual("You hear an ");
    expect(parts[1].type).toEqual("link-page");
    expect(parts.length).toEqual(3);
  });

});
