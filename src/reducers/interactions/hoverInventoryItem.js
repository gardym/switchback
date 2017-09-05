import Act5 from '../../acts/act5';

const hoverInventoryItem = ({interaction, ...state}, action) => {
  let nextState = interaction;

  if(!interaction.firstItem || !interaction.firstItem.selected) {
    nextState = Object.assign({}, interaction, {
      firstItem: {
        id: action.id,
        selected: false,
        text: Act5.items[action.id].text
      }
    });
  } else if(!interaction.secondItem) {
    if(action.id !== interaction.firstItem.id) {
      nextState = Object.assign({}, interaction, {
        secondItem: {
          id: action.id,
          selected: false,
          text: Act5.items[action.id].text,
          type: 'item'
        }
      });
    }
  }
  return Object.assign({}, state, { interaction: nextState });
}

export default hoverInventoryItem;
