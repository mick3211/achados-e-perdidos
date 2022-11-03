import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Button } from '@components/inputs/Button/Button';
import {
    ButtonContainer,
    FormContainerStyled,
} from '@components/inputs/forms/Forms.styled';
import { Container, TextField } from '@mui/material';
import { useLogin } from 'data/hooks/pages/useLogin.page';
import { GetStaticProps, NextPage } from 'next';
export const getStaticProps: GetStaticProps = () => ({
    props: { title: 'Login' },
});

const LoginPage: NextPage = () => {
    const { errors, handleSubmit, register, onSubmit, isSubmitting } =
        useLogin();

    return (
        <Container maxWidth="md">
            <PageTitle
                title="Realizar o login"
                subtitle="Realize o login para administrar os objetos cadastrados"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainerStyled>
                    <TextField
                        label="Email"
                        placeholder="Digite o seu email"
                        type="email"
                        fullWidth
                        {...register('email')}
                        error={errors.email !== undefined}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        label="Senha"
                        placeholder="Digite a sua senha"
                        type="password"
                        fullWidth
                        {...register('password')}
                        error={errors.password !== undefined}
                        helperText={errors.password?.message}
                    />
                </FormContainerStyled>
                <ButtonContainer>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Entrar
                    </Button>
                </ButtonContainer>
            </form>
        </Container>
    );
};

export default LoginPage;
