import { ThemeProvider } from '@mui/material';
import LightTheme from 'ui/themes/theme';
import { UserProvider } from './UserContext';

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <ThemeProvider theme={LightTheme}>
            <UserProvider>{children}</UserProvider>
        </ThemeProvider>
    );
};
