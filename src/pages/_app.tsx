import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppBar } from '@components/surfaces/Appbar/Appbar';
import { Router } from '@components/utils/Router';
import { MainProvider } from 'data/contexts/MainContext';
import { GlobalSnackbar } from '@components/utils/GlobalSnackbar';

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
            <GlobalSnackbar />
            <Router>
                <Component {...pageProps} />
            </Router>
        </MainProvider>
    );
}

export default MyApp;
