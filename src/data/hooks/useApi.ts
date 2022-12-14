import { AxiosRequestConfig } from 'axios';
import { ApiLinkInterface } from 'data/@types/LinkInterface';
import { ApiService, ApiServiceHateoas } from 'data/services/ApiService';
import { useCallback, useEffect } from 'react';
import useSWR, { mutate } from 'swr';

export function useApi<OutputType>(
    endpoint: string | null,
    config?: AxiosRequestConfig
): { data?: OutputType; error: Error } {
    const { data, error } = useSWR(endpoint, async url => {
        const response = await ApiService(url, config);
        return response.data;
    });

    return { data, error };
}

export function useApiHateoas<OutputType>(
    links: ApiLinkInterface[] = [],
    name: string | null,
    config?: AxiosRequestConfig
): { data: OutputType | undefined; error: Error } {
    const makeRequest = useCallback(() => {
        return new Promise<OutputType>(resolve => {
            ApiServiceHateoas(links, name || '', async request => {
                const response = await request<OutputType>(config);

                resolve(response.data);
            });
        });
    }, [links, name, config]);

    const { data, error } = useSWR<OutputType>(name, makeRequest);

    useEffect(() => {
        mutate(name);
    }, [name, links]);

    return { data, error };
}
