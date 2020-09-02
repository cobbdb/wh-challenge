import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import team from './team';

export default (history) => combineReducers({
  router: connectRouter(history),
  team,
});
