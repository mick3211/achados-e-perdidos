import { ThemeProvider } from '@mui/material';
import LightTheme from 'ui/themes/theme';
import { ObjetosProvider } from './ObjetosContext';
import { SnackbarProvider } from './SnackbarContext';
import { UserProvider } from './UserContext';

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <ThemeProvider theme={LightTheme}>
            <SnackbarProvider>
                <UserProvider>
                    <ObjetosProvider>{children}</ObjetosProvider>
                </UserProvider>
            </SnackbarProvider>
        </ThemeProvider>
    );
};
