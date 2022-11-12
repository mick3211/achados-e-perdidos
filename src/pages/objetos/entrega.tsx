import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Button } from '@components/inputs/Button/Button';
import {
    ButtonContainer,
    FormContainerStyled,
} from '@components/inputs/forms/Forms.styled';
import {
    CircularProgress,
    Container,
    TextField,
    Typography,
} from '@mui/material';
import { useEntregaObjeto } from 'data/hooks/pages/useEntregaObjeto.page';
import { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Informar entrega',
    },
});

const EntregaObjeto: NextPage = () => {
    const {
        objeto,
        isLoading,
        register,
        handleSubmit,
        errors,
        onSubmit,
        isSubmitting,
    } = useEntregaObjeto();

    if (isLoading) {
        return (
            <Container sx={{ textAlign: 'center', pt: 8 }}>
                <CircularProgress />
            </Container>
        );
    }

    if (objeto?.entregue) {
        return (
            <Container sx={{ textAlign: 'center', pt: 8 }}>
                <Typography>O objeto já foi entregue ao dono</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <PageTitle
                title={`Informar entrega do objeto ${objeto?.nome}`}
                subtitle="Entre com os dados da pessoa para qual o objeto foi entregue"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainerStyled>
                    <TextField
                        label="Nome"
                        placeholder="Digite o nome completo"
                        fullWidth
                        {...register('dono_nome')}
                        error={errors.dono_nome !== undefined}
                        helperText={errors.dono_nome?.message}
                    />
                    <TextField
                        label="CPF"
                        placeholder="Digite o CPF"
                        fullWidth
                        {...register('dono_cpf')}
                        error={errors.dono_cpf !== undefined}
                        helperText={errors.dono_cpf?.message}
                    />
                </FormContainerStyled>
                <ButtonContainer>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Confirmar entrega ao dono
                    </Button>
                </ButtonContainer>
            </form>
        </Container>
    );
};

export default EntregaObjeto;
