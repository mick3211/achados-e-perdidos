import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Objetos',
    },
});

const Objetos: NextPage = () => {
    return <div>objetos</div>;
};

export default Objetos;
