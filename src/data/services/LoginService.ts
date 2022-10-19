import axios from 'axios';
import { LoginFormInterface } from 'data/@types/forms/LoginFormInterface';
import { LocalInterface } from 'data/@types/LocalInterface';
import { ApiService } from './ApiService';
import { LocalStorage } from './StorageService';

export const LoginService = {
    async login(credentials: LoginFormInterface) {
        try {
            const tokens = (
                await ApiService.post<{ access: string; refresh: string }>(
                    '/api/auth/login/',
                    credentials
                )
            ).data;

            LocalStorage.set('access_token', tokens.access);
            LocalStorage.set('refresh_token', tokens.refresh);

            ApiService.defaults.headers.common['Authorization'] =
                'Bearer ' + tokens.access;

            return { success: true, error: null };
        } catch (error) {
            return { success: false, error };
        }
    },

    async getUser(): Promise<LocalInterface | undefined> {
        const token = LocalStorage.get('access_token', '');

        if (token) {
            ApiService.defaults.headers.common['Authorization'] =
                'Bearer ' + token;

            return (await ApiService.get<LocalInterface>('/api/locais')).data;
        }
        return undefined;
    },
};
