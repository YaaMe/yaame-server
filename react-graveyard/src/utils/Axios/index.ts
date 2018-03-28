import axios from 'axios';
import {
    SERVER_HOST as HOST,
    SERVER_TIMEOUT as TIMEOUT
} from 'config';
import { message } from 'antd';

export const error = info => {
    message.error(info)
    throw new Error(info)
}

export const server = axios.create({
    baseURL: HOST,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const wrapServer = opt => {
    return server.request({
        method: 'post',
        ...opt
    }).catch(() => error('请求处理失败'))}
