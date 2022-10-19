import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import LightTheme from 'ui/themes/theme';
import { ThemeProvider } from '@mui/material';
import { AppBar } from '@components/surfaces/Appbar/Appbar';
import { Router } from '@components/utils/Router';
import { MainProvider } from 'data/contexts/MainContext';

function MyApp({ Component, pageProps }: AppProps<{ title?: string }>) {
    return (
        <MainProvider>
            <CssBaseline />
            <Head>
                <title>
                    {pageProps.title
                        ? 'Achados e perdidos - ' + pageProps.title
                        : 'Achados e perdidos'}
                </title>
            </Head>
            <AppBar />
            <Router>
                <Component {...pageProps} />
            </Router>
        </MainProvider>
    );
}

export default MyApp;
