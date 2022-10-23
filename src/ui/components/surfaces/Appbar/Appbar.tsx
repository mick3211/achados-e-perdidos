import Image from 'next/image';
import { AppBarStyled, ButtonsContainer } from './Appbar.styled';
import { Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import useIsMobile from 'data/hooks/useIsMobile';
import { useRouter } from 'next/router';
import Link from '@components/navigation/Link/Link';
import { useContext } from 'react';
import { UserContext } from 'data/contexts/UserContext';
import { UserMenu } from '@components/navigation/UserMenu/UserMenu';
import { Button } from '@components/inputs/Button/Button';
import { LoginService } from 'data/services/LoginService';

export const AppBar: React.FC = () => {
    const isMobile = useIsMobile();
    const router = useRouter();
    const { userState } = useContext(UserContext);
    const isLogged = userState.userData.nome.length > 0;

    return (
        <AppBarStyled position="sticky" variant="outlined" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Achados e perdidos logo"
                            width={isMobile ? 90 : 170}
                            height={isMobile ? 51 : 64}
                        />
                    </Link>
                    <ButtonsContainer>
                        {!isLogged ? (
                            <>
                                {router.asPath !== '/login' && (
                                    <Link Component={Button} href="/login">
                                        Login
                                    </Link>
                                )}
                                {router.asPath !== '/cadastro' && (
                                    <Link
                                        Component={Button}
                                        href="/cadastro"
                                        mui={{ variant: 'contained' }}
                                    >
                                        Cadastrar um local
                                    </Link>
                                )}
                            </>
                        ) : (
                            <UserMenu
                                displayName={
                                    userState.userData.usuario.nome.split(
                                        ' '
                                    )[0]
                                }
                                onLogout={LoginService.logout}
                            />
                        )}
                    </ButtonsContainer>
                </Toolbar>
            </Container>
        </AppBarStyled>
    );
};
