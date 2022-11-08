import { LocalShortInterface } from 'data/@types/LocalInterface';
import { useApi } from '../useApi';

export function useLocaisList(nomeLocal: string) {
    const { data, error } = useApi<LocalShortInterface[]>('/api/locais/busca', {
        method: 'GET',
        params: { nome: nomeLocal },
    });
    const isLoading = data === undefined && !error;

    return {
        locais: data,
        error,
        isLoading,
    };
}
