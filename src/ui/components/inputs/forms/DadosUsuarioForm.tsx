import React from 'react';
import { Input, TextField } from '@mui/material';
import type { CadastroFormInterface } from 'data/@types/forms/CadastroFormInterface';
import { useFormContext } from 'react-hook-form';

export const DadosUsuarioForm: React.FC = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<CadastroFormInterface>();

    return (
        <>
            <TextField
                fullWidth
                label="Nome"
                placeholder="Digite o nome completo"
                {...register('usuario.nome')}
                error={errors.usuario?.nome !== undefined}
                helperText={errors.usuario?.nome?.message}
            />
            <TextField
                type="email"
                fullWidth
                label="Email"
                placeholder="Digite o seu email"
                {...register('usuario.email')}
                error={errors.usuario?.email !== undefined}
                helperText={errors.usuario?.email?.message}
            />
            <TextField
                type="password"
                fullWidth
                label="Senha"
                placeholder="Digite a sua senha"
                {...register('usuario.password')}
                error={errors.usuario?.password !== undefined}
                helperText={errors.usuario?.password?.message}
            />
            <TextField
                type="password"
                fullWidth
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                {...register('usuario.password_confirmation')}
                error={errors.usuario?.password_confirmation !== undefined}
                helperText={errors.usuario?.password_confirmation?.message}
            />
        </>
    );
};
