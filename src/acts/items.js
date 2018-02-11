const items = {
  portableRadio: {
    id: "portableRadio",
    text: "Portable radio",
    hoverText: "Sanyo, 1987. Tomato Red."
  },
  spareBatteries: {
    id: "spareBatteries",
    text: "Spare batteries",
    hoverText: "'5 Minutes of Power ALL THE TIME'"
  },
  poweredCarLamp: {
    id: "poweredCarLamp",
    text: "Battery-powered car headlamp",
    useWith: "rubberSportsHand",
    produces: "safePoweredCarLamp",
    hoverText: "Gives your hand a tingling sensation."
  },
  carlamp: {
    id: "carlamp",
    text: "Broken car headlamp",
    useWith: "batteries",
    produces: "poweredCarLamp",
    hoverText: "The bulb's still intact. It's your lucky day."
  },
  batteries: {
    id: "batteries",
    text: "Batteries",
    useWith: "carlamp",
    produces: "poweredCarLamp",
    hoverText: "You can put these in literally™ anything."
  },
  businessCard: {
    id: "businessCard",
    text: "Business Card",
    hoverText: "Herman Jones. Precinct 1A. Princedale."
  },
  rubberSportsHand: {
    id: "rubberSportsHand",
    text: "Novelty rubber 'foam' hand",
    useWith: "poweredCarLamp",
    produces: "safePoweredCarLamp",
    hoverText: "Go Capybaras! Or so it says."
  },
  safePoweredCarLamp: {
    id: "safePoweredCarLamp",
    text: "Insulated, powered car headlamp",
    hoverText: "Well insulated. Smells like burning rubber."
  }
};

export default items;
