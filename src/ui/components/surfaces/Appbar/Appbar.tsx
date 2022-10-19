import Image from 'next/image';
import { AppBarStyled, ButtonsContainer } from './Appbar.styled';
import { Button, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import useIsMobile from 'data/hooks/useIsMobile';
import { useRouter } from 'next/router';
import Link from '@components/navigation/Link/Link';
import { useContext } from 'react';
import { UserContext } from 'data/contexts/UserContext';

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
                        <a>
                            <Image
                                src="/logo.svg"
                                alt="Achados e perdidos logo"
                                width={isMobile ? 90 : 170}
                                height={isMobile ? 51 : 64}
                            />
                        </a>
                    </Link>
                    <ButtonsContainer>
                        {!isLogged && (
                            <>
                                {router.asPath !== '/login' && (
                                    <Button
                                        size={isMobile ? 'small' : 'medium'}
                                        href="/login"
                                        LinkComponent={Link}
                                    >
                                        Login
                                    </Button>
                                )}
                                {router.asPath !== '/cadastro' && (
                                    <Button
                                        variant="contained"
                                        size={isMobile ? 'small' : 'medium'}
                                        href="/cadastro"
                                        LinkComponent={Link}
                                    >
                                        Cadastrar um local
                                    </Button>
                                )}
                            </>
                        )}
                    </ButtonsContainer>
                </Toolbar>
            </Container>
        </AppBarStyled>
    );
};
