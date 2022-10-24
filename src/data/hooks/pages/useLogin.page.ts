import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { LoginFormInterface } from 'data/@types/forms/LoginFormInterface';
import { ApiService } from 'data/services/ApiService';
import { FormScheemaService } from 'data/services/FormScheemaService';
import { LoginService } from 'data/services/LoginService';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export function useLogin() {
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm<LoginFormInterface>({
        defaultValues: {
            email: process.env.NEXT_PUBLIC_LOGIN_TEST_EMAIL,
            password: process.env.NEXT_PUBLIC_LOGIN_TEST_PASSWORD,
        },
        resolver: yupResolver(FormScheemaService.login()),
    });

    const onSubmit: SubmitHandler<LoginFormInterface> = async data => {
        setIsSubmitting(true);
        setErrorMessage('');
        const login = await LoginService.login(data);

        if (login.success) {
            window.location.reload();
        }
        if (axios.isAxiosError(login.error)) {
            if (login.error?.response?.status == 401)
                setErrorMessage('Email e/ou senha inválidos');
            else
                setErrorMessage(
                    `Não foi possível realizar o login (${login.error.code})`
                );
        }
        setIsSubmitting(false);
    };

    return {
        errors,
        register,
        handleSubmit,
        errorMessage,
        onSubmit,
        isSubmitting,
    };
}
