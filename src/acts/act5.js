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
    { parts: [ "For a split second, the highway lights up with a flash." ] },
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
    { parts: [ "Something big, no... huge, tearing down the highway towards you." ] },
    {
      parts: [ "Maybe the ",
               {
                 type: "link-hotspot",
                 text: "driver",
                 id: "driver",
                 target: "driverPage"
               },
               " hasn't seen you, or maybe they just don't care." ],
      tip: "You can vaguely make out the traditional trucker hat from here."
    },
    { parts: [ "Either way, they're not slowing down." ] },
    { parts: [ "Do you need to ",
               { type: "link-page", text: "jump", target: "jump" },
               " into the road just to make them see you?" ] }
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
    { parts: [ "Your improvised lamp flickers off as the batteries melt the rubber hand over the contacts." ] },
    { parts: [ "The truck slows enough for you to step out into the dazzling light of its ",
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
    { parts: [ "While you're calculating stopping distances in your head the truck roars past you without slowing, leaving you alone on the ",
               { type: "link-page", text: "highway", target: "highway" },
               "." ] }
  ]
};

const headlampsPage = {
  id: 'headlamps',
  lines: [
    { parts: [ "The squeal of compressed air escapes from the truck." ] },
    { parts: [ "You shield your eyes from the headlamps and try to peer into the cab." ] },
    { parts: [ "You  think you can make out long hair below a trucker cap." ] },
    { parts: [ "The ",
               { type: "link-page", text: "door", target: "door" },
               " swings open." ] }
  ]
};

const doorPage = {
  id: 'door',
  lines: [
    { parts: [ "\"Not so smart to be running around in the middle of a highway\"" ] },
    { parts: [ "\"'specially this one...\"" ] },
    { parts: [ "\"You need a ride, kid?\"" ] },
    {
      condition: {
        type: "inventory",
        rule: "contains",
        value: ["businessCard"]
      },
      parts: [
        { type: "link-page", text: "Where ya goin'?", target: "goingCard" }
      ]
    },
    {
      condition: {
        type: "inventory",
        rule: "doesNotContain",
        value: ["businessCard"]
      },
      parts: [
        { type: "link-page", text: "Where ya goin'?", target: "goingNoCard" }
      ]
    }
  ]
};

const goingCardPage = {
  id: 'goingCard',
  lines: [
    { parts: [ "\"Princedale.\"" ] },
    { parts: [ "\"Well why didn't you say?\"" ] },
    { parts: [ "\"Get on in here.\"" ] }
  ]
};

const goingNoCardPage = {
  id: 'goingNoCard',
  lines: [
    { parts: [ "\"Ummm, I... I don't know.\"" ] },
    { parts: [ "\"What? No-one had the decency to leave you a note? The world, these days...\"" ] },
    { parts: [ "\"I can ",
               { type: "link-page", text: "wait", target: "wait" },
               " 5 minutes, no more.\"" ] }
  ]
};

const waitPage = {
  id: 'wait',
  lines: [
    { parts: [ "You rack your brains. Your head hurts. Think think think dammit." ] },
    { parts: [ "We were going to Grandad's. Wait... where even is Grandad's?" ] },
    { parts: [ "Who even knows if that's where they've gone?" ] },
    { parts: [ "All you know is you've got to get off this ",
               { type: "link-page", text: "highway", target: "highwayTruck" },
               "." ] }
  ]
};

const highwayTruckPage = {
  id: 'highwayTruck',
  lines: [
    { parts: [ "Okay. Calm down. The driver said they'd wait for you. Maybe." ] },
    { parts: [ "But there's no point waiting if you don't know where you're going." ] },
    { parts: [ "Gotta think." ] },
    { parts: [ "Check the ",
               { type: "link-page", text: "ground", target: "groundTruck" },
               " once more?" ] }
  ]
};

const groundTruckPage = {
  id: 'groundTruck',
  lines: [
    { parts: [ "In the bright lights of the truck headlamps it's easier to make out a ",
               { type: "link-item", text: "small, rectangular card", target: "businessCard" },
               " on the dirty ashphalt." ] },
    { parts: [ "This must be it." ] },
    { parts: [ "Something on this card must be useful to your ",
               { type: "link-page", text: "new friend", target: "door" },
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
  headlamps: headlampsPage,
  door: doorPage,
  goingCard: goingCardPage,
  goingNoCard: goingNoCardPage,
  wait: waitPage,
  highwayTruck: highwayTruckPage,
  groundTruck: groundTruckPage,
  jump: jumpPage
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
  hotspots: hotspots
};

export default Act5;
