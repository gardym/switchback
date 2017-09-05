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
    { parts: [ "It's so cloudy you can barely see your hands in the moonlight." ] },
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
        value: ["carlamp", "poweredCarLamp", "safePoweredCarLamp"]
      },
      parts: [ "Maybe if you go back down the ",
               { type: "link-page", text: "bank", target: "bank" },
               " and back up they'll magically appear..." ]
    },
    {
      condition: {
        type: "inventory",
        rule: "contains",
        value: ["poweredCarLamp", "safePoweredCarLamp"]
      },
      parts: [ "You can hear the low rumbling of an ",
               { type: "link-page", text: " engine ", target: "engine" },
               " approaching in the distance." ]
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

const shineGroundPage = {
  id: 'shineGround',
  lines: [
    { parts: [ "You see a ",
               { type: "link-item", text: "small, rectangular card", target: "businessCard" },
               " on the ground." ] },
    { parts: [ "You flick the lamp off." ] },
    { parts: [ "The ",
               { type: "link-page", text: "highway", target: "highway" },
               " returns to darkness but the light burns take a while to fade from your eyes." ] }
  ]
};

const enginePage = {
  id: 'engine',
  lines: [
    { parts: [ "Something big, no huge, tearing down the highway towards you." ] },
    {
      parts: [ "Whoever the ",
               {
                 type: "link-hotspot",
                 text: "driver",
                 id: "driver",
                 target: "driverPage"
               },
               " is, they're not slowing down." ],
      tip: "You can vaguely make out the traditional trucker hat from here."
    },
    { parts: [ "Has it come to this?" ] },
    { parts: [ "Do you need to ",
               { type: "link-page", text: "jump", target: "jump" },
               " in front of it just to make them see you?" ] }
  ]
};

const flashDriverPage = {
  id: 'flashDriver',
  lines: [
    { parts: [ "For a split second, the highway lights up in a flash." ] },
    { parts: [ "... before the batteries short and an electric shock sends a spasm through your hand." ] },
    { parts: [ "You could swear the truck slows a little as it sails past, leaving you alone on the ",
               { type: "link-page", text: "highway", target: "highway" },
               "." ] }
  ]
};

const shineDriverPage = {
  id: 'shineDriver',
  lines: [
    { parts: [ "You wave your improvised torch madly at the approaching truck." ] },
    { parts: [ "You've never been so happy to hear the unmistakable sound of an engine brake." ] },
    { parts: [ "The batteries finally melt the rubber onto the contacts and the lamp fizzles off." ] },
    { parts: [ "The truck is slow enough you can probably step out into the dazzling light of its ",
               { type: "link-page", text: "headlamps", target: "headlamps" },
               "." ] }
  ]
};

const jumpPage = {
  id: 'jump',
  lines: [
    { parts: [ "You hold your breath and start counting..." ] },
    { parts: [ "3... You're sure they'll see you in time..." ] },
    { parts: [ "2... 70mph isn't that fast... is it?" ] },
    { parts: [ "..." ] },
    { parts: [ "This is no time for stupidity." ] },
    { parts: [ "The truck roars past you without slowing, leaving you alone on the ",
               { type: "link-page", text: "highway", target: "highway" },
               "." ] }
  ]
};

const pages = {
  _init: initPage,
  highway: highwayPage,
  bank: bankPage,
  something: somethingPage,
  ground: groundPage,
  shineGround: shineGroundPage,
  engine: enginePage,
  flashDriver: flashDriverPage,
  shineDriver: shineDriverPage,
  jump: jumpPage
};

const items = {
  poweredCarLamp: {
    id: "poweredCarLamp",
    text: "Battery-powered car headlamp",
    useWith: "rubberSportsHand",
    produces: "safePoweredCarLamp"
  },
  carlamp: { id: "carlamp", text: "Broken car headlamp", useWith: "batteries", produces: "poweredCarLamp" },
  batteries: { id: "batteries", text: "Batteries", useWith: "carlamp", produces: "poweredCarLamp" },
  businessCard: { id: "businessCard", text: "Business Card" },
  rubberSportsHand: {
    id: "rubberSportsHand",
    text: "Novelty rubber 'foam' hand",
    useWith: "poweredCarLamp",
    produces: "safePoweredCarLamp"
  },
  safePoweredCarLamp: { id: "safePoweredCarLamp", text: "Rubber-handled, battery-powered, car headlamp" }
};

const hotspots = {
  ground: {
    id: "ground",
    text: "ground",
    useWith: {
      poweredCarLamp: "ground",
      safePoweredCarLamp: "shineGround"
    }
  },
  driver: {
    id: "driver",
    text: "driver",
    useWith: {
      poweredCarLamp: "flashDriver",
      safePoweredCarLamp: "shineDriver"
    }
  }
};

const Act5 = {
  pages: pages,
  items: items,
  hotspots: hotspots
};

export default Act5;
