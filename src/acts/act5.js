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

const pages = {
  _init: initPage,
  highway: highwayPage
};

const Act5 = {
  pages: pages
};

export default Act5;
