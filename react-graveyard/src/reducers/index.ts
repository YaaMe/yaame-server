import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { default as user } from './user';

export const test = (state = {'testid': '11'}, action) => {
    return state;
}

export default combineReducers({
    user,
    test,

    router
})
