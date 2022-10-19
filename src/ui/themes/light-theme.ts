import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6558F5',
        },
        text: {
            primary: '#293845 ',
            secondary: '#9B9B9B',
        },
        grey: {
            50: '#FAFAFA',
            100: '#F0F0F0',
            200: '#D7D9DD',
            300: '#C4C4C4',
            400: '#9B9B9B',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1440,
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    shape: {
        borderRadius: 5,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    fontWeight: 400,
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                sizeSmall: {
                    fontSize: '0.7rem',
                    padding: '8px 14px',
                },
                sizeMedium: {
                    fontSize: '1.1rem',
                    padding: '16px 52px',
                },
            },
        },
    },
});

export default theme;
