const initPage = {
  id: '_init',
  lines: [
    { parts: [ "The ",
               { type: "link-page", text: "highway", target: "highway" },
               " stretches out, straight, as far as you can see in both directions." ] },
    { parts: [ "A car can't just disappear... can it?" ] },
    { parts: [ "And what about that other voice?" ] },
    { parts: [ "Maybe if you went back down the ",
               { type: "link-page", text: "bank", target: "bank" },
               " and back up, they'll magically appear..." ] }
  ]
};

const highwayPage = {
  id: 'highway',
  lines: [
    { parts: [ "It's so cloudy you can barely see your hands in the moonlight" ] },
    { parts: [ "Where did they go?" ] },
    { parts: [ "You don't have any supplies to last the night." ] },
    {
      condition: {
        type: "inventory",
        rule: "doesNotContain",
        value: ["businessCard"]
      },
      parts: [ "Unless someone dropped something on the ",
               {
                 type: "link-hotspot",
                 text: "ground",
                 id: "ground",
                 target: "groundPage"
               },
               "." ],
      tip: "You scrub your fingers over the cold ashphalt. Nothing but dirt and hopelessness. It's too dark to see anything down there..."
    },
    {
      condition: {
        type: "inventory",
        rule: "doesNotContain",
        value: ["carlamp", "poweredCarLamp"]
      },
      parts: [ "Maybe if you go back down the ",
               { type: "link-page", text: "bank", target: "bank" },
               " and back up they'll magically appear..." ]
    },
    {
      condition: {
        type: "inventory",
        rule: "contains",
        value: ["poweredCarLamp"]
      },
      parts: [ "You can hear the sound of a truck approaching in the distance." ]
    }
  ]
};

const bankPage = {
  id: 'bank',
  lines: [
    { parts: [ "You take the bank more slowly, carefully, this time." ] },
    { parts: [ "Slow enough that your foot just catches on ",
               { type: "link-page", text: "something", target: "something" },
               " without sending you tumbling." ] },
    { parts: [ "There's nothing else down here but bushes and woods as far as you can see. Which isn't far in this light." ] },
    { parts: [ "Might as well try the ",
               { type: "link-page", text: "highway", target: "highway" },
               " again." ] }
  ]
};

const somethingPage = {
  id: 'something',
  lines: [
    { parts: [ "You feel around at your feet for something hard." ] },
    { parts: [ "It's a ",
             { type: "link-item", text: "broken car headlamp", target: "carlamp" },
               ". Guess you're not the first person to come unstuck on this stretch of ",
             { type: "link-page", text: "highway", target: "highway" }, "." ] }
  ]
};

const groundPage = {
  id: 'ground',
  lines: [
    { parts: [ "For a split second, the highway lights up in a flash." ] },
    { parts: [ "You see a ",
               { type: "link-item", text: "small, rectangular card", target: "businessCard" },
               " on the ground." ] },
    { parts: [ "... before the batteries short and an electric shock sends a spasm through your hand." ] },
    { parts: [ "The ",
               { type: "link-page", text: "highway", target: "highway" },
               " returns to darkness but the light burns take a while to fade from your eyes." ] }
  ]
};

const pages = {
  _init: initPage,
  highway: highwayPage,
  bank: bankPage,
  something: somethingPage,
  ground: groundPage
};

const items = {
  poweredCarLamp: { id: "poweredCarLamp", text: "Battery-powered car headlamp", useWith: "ground" },
  carlamp: { id: "carlamp", text: "Broken car headlamp", useWith: "batteries", produces: "poweredCarLamp" },
  batteries: { id: "batteries", text: "Batteries", useWith: "carlamp", produces: "poweredCarLamp" },
  businessCard: { id: "businessCard", text: "Business Card" }
};

const hotspots = {
  ground: { id: "ground", text: "ground", useWith: "poweredCarLamp", target: "ground" }
};

const Act5 = {
  pages: pages,
  items: items,
  hotspots: hotspots
};

export default Act5;
