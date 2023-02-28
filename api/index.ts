import {
    showMessage, getUserInfo
} from '@/composables/utils';


const fetch = $fetch.create({
    async onRequest({ options }) {
        // 设置基本路径
        const { apiBase } = useRuntimeConfig();
        options.baseURL = apiBase;

        // 添加token
        if (getUserInfo()) {
            options.headers = new Headers(options.headers);
            options.headers.set('Authorization', `${getUserInfo().token}`);
        }
    },

    async onResponse({ response }) {
        return response as any;
    },

    async onResponseError(error) {
        // const code = error.response.status;
        const msg = error.response?._data?.msg_zh || error.response?._data?.msg_en || error.response.statusText;
        showMessage(`${msg}`, 'error');
        return Promise.reject(error);
    }
})

const useHttp = {
    get: (url: string, params: Object) => fetch(url, { method: 'get', params }),
    post: (url: string, body: Object) => fetch(url, { method: 'post', body })
};

export default useHttp;








