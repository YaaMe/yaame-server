let { web3 }: any = window;

if (typeof web3 === 'undefined') {
    throw new Error('here is not MetaMask extension')
}


export const wrapPromise = (api, mask = web3) => (...args) => new Promise((resolv, reject) => {
    mask.eth[api](...args, (error, result) => {
        if (error) {
            reject(error)
        }
        resolv(result);
    })
});

const parseApi = (obj, api, index) => {
    obj[api] = wrapPromise(api);
    return obj
}

export const metaMask = apiList => apiList.reduce(parseApi, {})


export default web3;
