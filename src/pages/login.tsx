import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import {
    Container,
    Paper,
    TextField,
    Button,
    Box,
    Typography,
} from '@mui/material';
import { useLogin } from 'data/hooks/pages/useLogin.page';
import { GetStaticProps, NextPage } from 'next';
import { FormContainerStyled } from 'ui/styles/pages/login.styled';
export const getStaticProps: GetStaticProps = () => ({
    props: { title: 'Login' },
});

const LoginPage: NextPage = () => {
    const {
        errors,
        handleSubmit,
        register,
        errorMessage,
        onSubmit,
        isSubmitting,
    } = useLogin();

    return (
        <Container maxWidth="md">
            <PageTitle
                title="Realizar o login"
                subtitle="Realize o login para administrar os objetos cadastrados"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainerStyled variant="outlined" elevation={0}>
                    <TextField
                        label="Email"
                        placeholder="Digite o seu email"
                        type="email"
                        fullWidth
                        {...register('email')}
                        error={errors.email !== undefined}
                        helperText={errors.email?.message}
                        sx={{ mb: 3 }}
                    />
                    <TextField
                        label="Senha"
                        placeholder="Digite a sua senha"
                        type="password"
                        fullWidth
                        {...register('password')}
                        error={errors.password !== undefined}
                        helperText={errors.password?.message}
                        sx={{ mb: 3 }}
                    />

                    {errorMessage && (
                        <Typography color="error">{errorMessage}</Typography>
                    )}
                </FormContainerStyled>
                <Box sx={{ textAlign: 'center', mt: 6.5 }}>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Entrar
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default LoginPage;
