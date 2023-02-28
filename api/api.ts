import useHttp from './index';

// const proxy = process.env.NODE_ENV === 'development' ? '/api/platform3' : '/platform3';
// const user = process.env.NODE_ENV === 'development' ? '/api/user' : '/user';
// const cos = process.env.NODE_ENV === 'development' ? '/api/sapi' : '/sapi';
interface type{}

/**
 * example
 */
 export function getDataApi(data: type) {
    return useHttp.post(`/quote/register`, data)
}
