import { combineReducers } from 'redux';

import entries from '../reducers/entries';

const rootReducer = combineReducers({
  entries
});

export default rootReducer;
