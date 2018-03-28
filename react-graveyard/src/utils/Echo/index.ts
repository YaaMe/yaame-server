import { ACTION_TYPE as USER_ACTION } from 'actions/user';
import { KEY, LIFECYCLE } from 'redux-pack';
import { message } from 'antd';

const unpack = (action, echoMsg) => {
    const { meta } = action;
    const lifecycle = meta ? meta[KEY.LIFECYCLE] : null;
    switch (lifecycle) {
        case LIFECYCLE.SUCCESS: message.info(echoMsg); break;
        default: ;
    }
}

export const echoMiddleware = store => next => action => {
    switch (action.type) {
        case USER_ACTION.LOGIN: unpack(action, 'user is login'); break;
        default: ;
    }
    return next(action);
}
