const unhoverHotspot = ({interaction, ...state}, action) => {
  let nextState = interaction;
  if(interaction.firstItem && interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, {
      secondItem: null
    });
  }
  return Object.assign({}, state, { interaction: nextState });
}

export default unhoverHotspot;
