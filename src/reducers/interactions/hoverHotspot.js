import Act5 from '../../acts/act5';

const hoverHotspot = ({interaction, ...state}, action) => {
  let nextState = interaction;
  if(interaction.firstItem && interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, {
      secondItem: {
        id: action.id,
        selected: false,
        type: 'hotspot',
        text: Act5.hotspots[action.id].text
      }
    });
  }
  return Object.assign({}, state, { interaction: nextState });
}

export default hoverHotspot;
