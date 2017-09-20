const hoverHotspot = ({interaction, ...state}, action, act) => {
  let nextState = interaction;
  if(interaction.firstItem && interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, {
      secondItem: {
        id: action.id,
        selected: false,
        type: 'hotspot',
        text: act.hotspots[action.id].text
      }
    });
  }
  return Object.assign({}, state, { interaction: nextState });
}

export default hoverHotspot;
