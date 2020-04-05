export function selectSalon(salon) {
  // selectSalon is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'SALON_SELECTED',
    payload: salon
  };
}