import React from 'react';
import { Input, TextField } from '@mui/material';
import type { CadastroFormInterface } from 'data/@types/forms/CadastroFormInterface';
import { Controller, useFormContext } from 'react-hook-form';
import { FileField } from '../FileField/FileField';

export const DadosLocalForm: React.FC = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<CadastroFormInterface>();

    return (
        <>
            <TextField
                fullWidth
                label="Nome do local"
                placeholder="Digite o nome do local"
                {...register('nome')}
                error={errors.nome !== undefined}
                helperText={errors.nome?.message}
            />
            <TextField
                fullWidth
                label="Endereço"
                placeholder="Digite o endereço do local"
                {...register('endereco')}
                error={errors.endereco !== undefined}
                helperText={errors.endereco?.message}
            />
            <TextField
                fullWidth
                label="Modos de contato"
                placeholder="Digite como o usuário pode entrar em contato com você"
                {...register('contato')}
                error={errors.contato !== undefined}
                helperText={errors.contato?.message}
            />
            <TextField
                fullWidth
                label="Descrição (opcional)"
                placeholder="Digite a descrição do local"
                {...register('descricao')}
                error={errors.descricao !== undefined}
                helperText={errors.descricao?.message}
            />
            <Controller
                control={control}
                name="imagem_local"
                render={({ field }) => (
                    <FileField
                        accept=".jpg, .jpeg, .png"
                        multiple={false}
                        MuiInputProps={{
                            label: 'Imagem do local',
                            placeholder: 'Selecione a imagem do local',
                            error: errors.imagem_local !== undefined,
                            helperText: errors.imagem_local?.message,
                        }}
                        onChange={files => field.onChange(files[0])}
                    />
                )}
            />
        </>
    );
};
