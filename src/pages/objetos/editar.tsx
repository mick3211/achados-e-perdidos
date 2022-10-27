import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Container } from '@mui/material';
import { ObjetosProvider } from 'data/contexts/ObjetosContext';
import { GetStaticProps, NextPage } from 'next';
import { EditarObjetoForm } from 'ui/partials/objetos/editar/_EditarObjetoForm';

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            title: 'Editar objeto',
        },
    };
};

const EditarObjeto: NextPage = () => {
    return (
        <ObjetosProvider>
            <Container>
                <PageTitle
                    title="Editar objeto"
                    subtitle="Preencha os campos aos quais você deseja alterar abaixo"
                />
                <EditarObjetoForm />
            </Container>
        </ObjetosProvider>
    );
};

export default EditarObjeto;
