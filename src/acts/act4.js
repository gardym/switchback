const initPage = {
  id: '_init',
  lines: [
    { parts: [ "You wake up slowly. It's dark outside and the car's stopped." ] },
    { parts: [ "Your arm is numb from the weird way you were sleeping on it."] },
    { parts: [ "Everyone else in the car is asleep." ] },
    { parts: [ "You really need to ",
               { type: "link-page", text: "pee", target: "pee" },
               " but you're too ",
               { type: "link-page", text: "tired", target: "tired" },
               " to get up." ] }
  ]
};

const pages = {
  _init: initPage
};

const hotspots = {
};

const Act4 = {
  pages: pages,
  hotspots: hotspots
};

export default Act4;

