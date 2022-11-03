import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { LoginFormInterface } from 'data/@types/forms/LoginFormInterface';
import { snackbarContext } from 'data/contexts/SnackbarContext';
import { FormScheemaService } from 'data/services/FormScheemaService';
import { LoginService } from 'data/services/LoginService';
import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export function useLogin() {
    const { setSnackMessage } = useContext(snackbarContext);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormInterface>({
        defaultValues: {
            email: process.env.NEXT_PUBLIC_LOGIN_TEST_EMAIL,
            password: process.env.NEXT_PUBLIC_LOGIN_TEST_PASSWORD,
        },
        resolver: yupResolver(FormScheemaService.login()),
    });

    const onSubmit: SubmitHandler<LoginFormInterface> = async data => {
        const login = await LoginService.login(data);

        if (login.success) {
            window.location.reload();
        }
        if (axios.isAxiosError(login.error)) {
            if (login.error?.response?.status == 401)
                setSnackMessage({
                    message: 'Email e/ou senha inválidos',
                    severity: 'error',
                });
            else
                setSnackMessage({
                    message: `Não foi possível realizar o login (${login.error.message})`,
                    severity: 'error',
                });
        }
    };

    return {
        errors,
        register,
        handleSubmit,
        onSubmit,
        isSubmitting,
    };
}
