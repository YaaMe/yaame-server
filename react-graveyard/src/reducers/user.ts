import { ACTION_TYPE as USER_ACTION } from 'actions/user';
import { initState, STORAGE_KEY } from 'utils/Storage';

export default (state = initState(STORAGE_KEY.USER), action) => {
    switch (action.type) {
        case USER_ACTION.ADD_USER:
            return [...state, ...action.user];
        case USER_ACTION.CLEAR_USER:
            return [];
        default: return state;
    }
}
