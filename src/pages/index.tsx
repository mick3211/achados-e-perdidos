import { Button } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Início',
    },
});

const Home: NextPage = () => {
    return <div>home</div>;
};

export default Home;
