import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Button } from '@components/inputs/Button/Button';
import { DadosLocalForm } from '@components/inputs/forms/DadosLocalForm';
import { DadosUsuarioForm } from '@components/inputs/forms/DadosUsuarioForm';
import {
    ButtonContainer,
    FormContainerStyled,
    FormSectionTitle,
} from '@components/inputs/forms/Forms.styled';
import { Container, Typography } from '@mui/material';
import { useCadastro } from 'data/hooks/pages/useCadastro.page';
import type { GetStaticProps, NextPage } from 'next';
import { FormProvider } from 'react-hook-form';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Cadastro',
    },
});

const Cadastro: NextPage = () => {
    const { formMethods, onSubmit } = useCadastro();

    return (
        <Container maxWidth="xl">
            <PageTitle
                title="Cadastrar-se na plataforma"
                subtitle="Primeiro vamos precisar de alguns dados pessoais"
            />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <FormContainerStyled>
                        <FormSectionTitle>Dados do local</FormSectionTitle>
                        <DadosLocalForm />
                    </FormContainerStyled>
                    <FormContainerStyled sx={{ mt: 4 }}>
                        <FormSectionTitle>
                            Dados do administrador do local
                        </FormSectionTitle>
                        <DadosUsuarioForm />
                    </FormContainerStyled>

                    <ButtonContainer>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 4 }}
                            disabled={formMethods.formState.isSubmitting}
                        >
                            Cadastre-se
                        </Button>
                    </ButtonContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default Cadastro;
