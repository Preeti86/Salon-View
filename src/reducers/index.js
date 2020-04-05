import { combineReducers } from 'redux';
import SalonsReducer from './reducer_salons';
import ActiveSalon from './reducer_active_salon';

const rootReducer = combineReducers({
  salons: SalonsReducer,
  activeSalon: ActiveSalon
});

export default rootReducer;