import { Box, CircularProgress } from '@mui/material';
import { UserContext } from 'data/contexts/UserContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

const AnnonymouRoutes = ['/login', '/cadastro', '/'];

const PrivateRoutes = ['/objetos', '/objetos/novo', '/objetos/editar'];

export const Router: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const { userState } = useContext(UserContext);
    const isLogged = userState.userData.nome.length > 1;
    const canShow =
        (AnnonymouRoutes.includes(router.pathname) && !isLogged) ||
        (PrivateRoutes.includes(router.pathname) && isLogged);

    if (userState.isLogging) {
        return (
            <Box sx={{ textAlign: 'center', py: 9 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!canShow) {
        router.replace(isLogged ? '/objetos' : '/login');
    }

    return <>{children}</>;
};
