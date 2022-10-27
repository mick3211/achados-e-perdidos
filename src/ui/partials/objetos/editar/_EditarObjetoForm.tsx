import { Button } from '@components/inputs/Button/Button';
import { DadosObjetoForm } from '@components/inputs/forms/DadosObjetoForm';
import {
    ButtonContainer,
    FormContainerStyled,
} from '@components/inputs/forms/Forms.styled';
import { Typography } from '@mui/material';
import { useEditarObjeto } from 'data/hooks/pages/useEditarObjeto.page';
import React from 'react';
import { FormProvider } from 'react-hook-form';

export const EditarObjetoForm: React.FC = () => {
    const { formMethods, error, onSubmit } = useEditarObjeto();

    return error ? (
        <Typography align="center" color="error">
            Não foi possível carregar as informações do objeto
        </Typography>
    ) : (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                <FormContainerStyled>
                    <DadosObjetoForm />
                </FormContainerStyled>
                <ButtonContainer>
                    <Button variant="contained" type="submit">
                        Salvar
                    </Button>
                </ButtonContainer>
            </form>
        </FormProvider>
    );
};
