import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { BuscarLocais } from 'ui/partials/index/_BuscarLocais';
import { LocaisList } from 'ui/partials/index/_LocaisList';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Encontrar objeto',
    },
});

const Home: NextPage = () => {
    const router = useRouter();
    const nomeLocal = router.query.nome_local as string;

    return nomeLocal ? <LocaisList nomeLocal={nomeLocal} /> : <BuscarLocais />;
};

export default Home;
