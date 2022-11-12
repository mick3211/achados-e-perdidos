import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Button } from '@components/inputs/Button/Button';
import { DadosLocalForm } from '@components/inputs/forms/DadosLocalForm';
import { DadosUsuarioForm } from '@components/inputs/forms/DadosUsuarioForm';
import { Container, Typography, Box } from '@mui/material';
import { useAlterarDados } from 'data/hooks/pages/useAlterarDados.page';
import { NextPage, GetStaticProps } from 'next';
import { FormProvider } from 'react-hook-form';
import {
    ButtonContainer,
    FormContainerStyled,
    FormSectionTitle,
} from '@components/inputs/forms/Forms.styled';
import { Dialog } from '@components/feedback/Dialog/Dialog';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Alterar dados',
    },
});

const AlterarDados: NextPage = () => {
    const {
        formMethods,
        onSubmit,
        isDialogOpen,
        setIsDialogOpen,
        onDeleteAccount,
    } = useAlterarDados();

    return (
        <>
            <Container>
                <PageTitle
                    title="Alterar os dados do local"
                    subtitle="Alteração dos dados cadastrais, troca de senha ou exclusão do local"
                />
                <FormProvider {...formMethods}>
                    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                        <FormContainerStyled>
                            <FormSectionTitle>Dados do local</FormSectionTitle>
                            <DadosLocalForm />
                        </FormContainerStyled>
                        <FormContainerStyled sx={{ mt: { md: 4, xs: 2 } }}>
                            <FormSectionTitle>
                                Dados do administrador do local
                            </FormSectionTitle>
                            <DadosUsuarioForm />
                        </FormContainerStyled>
                        <ButtonContainer>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={formMethods.formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </ButtonContainer>
                    </form>
                </FormProvider>

                <FormContainerStyled sx={{ mb: 4 }}>
                    <FormSectionTitle>
                        Excluir local da plataforma
                    </FormSectionTitle>
                    <Typography color="GrayText">
                        Tem certeza que deseja excluir o local da plataforma?
                        Todos os itens cadastrados serão excluidos junto com o
                        local.
                    </Typography>
                    <Box sx={{ textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => setIsDialogOpen(true)}
                        >
                            Excluir
                        </Button>
                    </Box>
                </FormContainerStyled>
            </Container>

            <Dialog
                title="Tem certeza?"
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={onDeleteAccount}
            >
                <Typography>
                    Sua conta e todos os dados relacionados a ela serão apagados
                    do sistema.
                </Typography>
                <Typography
                    color="error"
                    fontWeight="bold"
                    textTransform="uppercase"
                >
                    Esta ação é irreversível
                </Typography>
            </Dialog>
        </>
    );
};

export default AlterarDados;
