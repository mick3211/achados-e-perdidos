import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Button } from '@components/inputs/Button/Button';
import { DadosObjetoForm } from '@components/inputs/forms/DadosObjetoForm';
import {
    ButtonContainer,
    FormContainerStyled,
} from '@components/inputs/forms/Forms.styled';
import { Container } from '@mui/material';
import { useAdicionarObjeto } from 'data/hooks/pages/useAdicionarObjeto.page';
import { GetStaticProps, NextPage } from 'next';
import { FormProvider } from 'react-hook-form';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Novo objeto',
    },
});

const NovoObjeto: NextPage = () => {
    const { formMethods, onSubmit } = useAdicionarObjeto();

    return (
        <Container>
            <PageTitle
                title="Adicionar novo objeto"
                subtitle="Preencha os dados do objeto que deseja adicionar"
            />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <FormContainerStyled>
                        <DadosObjetoForm />
                    </FormContainerStyled>
                    <ButtonContainer>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={formMethods.formState.isSubmitting}
                        >
                            Adicionar
                        </Button>
                    </ButtonContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default NovoObjeto;
