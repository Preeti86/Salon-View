/* eslint-disable default-case */
// state argument is not application state, only the state
// this reducer is responsible for
// eslint-disable-next-line
export default function(state = null, action) {
  switch(action.type) {
    case 'SALON_SELECTED':
      return action.payload;
  }
  return state;
}