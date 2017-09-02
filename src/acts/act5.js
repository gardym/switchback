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
    { parts: [ "Unless someone dropped something on the ",
               { type: "link-page", text: "ground", target: "ground" },
               "." ] },
    { parts: [ "Maybe if you go back down the ",
               { type: "link-page", text: "bank", target: "bank" },
               " and back up they'll magically appear..." ] }
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
             { type: "link-page", text: "highway", target: "highway" }, "." ] },
    { parts: [ "You could search the ",
             { type: "link-hotspot", text: "ground" },
             "." ] }
  ]
};

const pages = {
  _init: initPage,
  highway: highwayPage,
  bank: bankPage,
  something: somethingPage
};

const items = {
  poweredCarLamp: { id: "poweredCarLamp", text: "Battery-powered car headlamp" },
  carlamp: { id: "carlamp", text: "Broken car headlamp", useWith: "batteries", produces: "poweredCarLamp" },
  batteries: { id: "batteries", text: "Batteries", useWith: "carlamp", produces: "poweredCarLamp" }
};

const Act5 = {
  pages: pages,
  items: items
};

export default Act5;
