import axios from 'axios';

type baseRequestType = {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    config?: object;
};

const baseRequest = ({endpoint, method, config}:baseRequestType) => {
    const api = axios(endpoint, {
        method,
        ...config
    });

    return api;
}

const get = (endpoint:string, config?:object) => baseRequest({endpoint, method: 'GET', config});

const put = (endpoint:string, config?:object) => baseRequest({endpoint, method: 'PUT', config});

const api = {get, put};

export default api;