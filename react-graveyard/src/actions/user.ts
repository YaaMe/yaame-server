import { server } from 'utils/Axios';

export enum ACTION_TYPE {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    ADD_USER = 'ADD_USER',
    CLEAR_USER = 'CLEAR_USER'
}

export const addUser = user => ({
    type: ACTION_TYPE.ADD_USER,
    user
});

export const clearUser = () => ({
    type: ACTION_TYPE.CLEAR_USER,
})

export const login = value => {
    return {
        type: ACTION_TYPE.LOGIN,
        promise: server.request({
            method: 'post',
            url: '/user/login/'
        })
    }
};

export const logout = () => ({
    type: ACTION_TYPE.LOGOUT
})
