import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiLinkInterface } from 'data/@types/LinkInterface';
import { LocalStorage } from './StorageService';

export const ApiService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

ApiService.interceptors.response.use(
    resp => resp,
    err => {
        if (
            err.response.status === 401 &&
            err.response.data.code === 'token_not_valid'
        ) {
            handleTokenRefresh(err);
        }
        return Promise.reject(err);
    }
);

async function handleTokenRefresh(err: { config: AxiosRequestConfig }) {
    const refreshToken = LocalStorage.get<string>('refresh_token', '');
    if (refreshToken) {
        LocalStorage.clear('access_token');
        LocalStorage.clear('refresh_token');

        try {
            const { data } = await ApiService.post<{
                access: string;
                refresh: string;
            }>('/api/auth/refresh/', {
                refresh: refreshToken,
            });

            LocalStorage.set('access_token', data.access);
            LocalStorage.set('refresh_token', data.refresh);

            ApiService.defaults.headers.common['Authorization'] =
                'Bearer ' + data.access;

            if (err.config.headers)
                err.config.headers.Authorization =
                    ApiService.defaults.headers.common['Authorization'];

            return ApiService(err.config);
        } catch (e) {
            return err;
        }
    } else {
        return err;
    }
}

export function LinkResolver(
    links: ApiLinkInterface[] = [],
    name: string
): ApiLinkInterface | undefined {
    return links.find(link => link.rel === name);
}

export function ApiServiceHateoas(
    links: ApiLinkInterface[],
    name: string,
    onCanRequest: (
        request: <T>(data?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
    ) => void,
    onCantRequest?: Function
) {
    const requestLink = LinkResolver(links, name);
    if (requestLink) {
        onCanRequest(<T>(data?: AxiosRequestConfig) => {
            return ApiService.request<T>({
                method: requestLink.type,
                url: requestLink.uri,
                ...data,
            });
        });
    } else {
        onCantRequest?.();
    }
}
