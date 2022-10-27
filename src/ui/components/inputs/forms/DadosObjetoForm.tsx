import { TextField } from '@mui/material';
import { DadosObjetoFormInterface } from 'data/@types/forms/DadosObjetoFormInterface';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FileField } from '../FileField/FileField';

export const DadosObjetoForm: React.FC = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<DadosObjetoFormInterface>();

    return (
        <>
            <TextField
                label="Nome"
                placeholder="Digite o nome do objeto"
                {...register('nome')}
                error={errors?.nome !== undefined}
                helperText={errors?.nome?.message}
            />
            <TextField
                label="Descrição"
                placeholder="Digite a descrição do objeto"
                {...register('descricao')}
                error={errors?.descricao !== undefined}
                helperText={errors?.descricao?.message}
            />
            <Controller
                control={control}
                name="imagem_objeto"
                render={({ field }) => (
                    <FileField
                        accept=".jpg, .jpeg, .png"
                        multiple={false}
                        MuiInputProps={{
                            label: 'Imagem do objeto',
                            placeholder: 'Selecione a imagem do objeto',
                            error: errors.imagem_objeto !== undefined,
                            helperText: errors.imagem_objeto?.message,
                        }}
                        onChange={files => field.onChange(files[0])}
                    />
                )}
            />
        </>
    );
};
