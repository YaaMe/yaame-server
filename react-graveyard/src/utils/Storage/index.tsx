import { ACTION_TYPE as USER_ACTION } from 'actions/user';

export enum STORAGE_KEY {
    USER = 'user'
}

const storage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const clear = key => {
    return localStorage.removeItem(key)
}

export const initState = key => {
    let state = localStorage.getItem(key);
    if (state) {
        return JSON.parse(state);
    }
    switch (key) {
        case STORAGE_KEY.USER: return [];
        default: return {};
    }
}

export const storageMiddleware = store => next => action => {
    let nextAction = next(action);
    switch (action.type) {
        case USER_ACTION.ADD_USER:
            let { user } = store.getState();
            storage(STORAGE_KEY.USER, user);
            break;
        case USER_ACTION.CLEAR_USER: clear(STORAGE_KEY.USER); break;
        default: ;
    }
    return nextAction;
}
