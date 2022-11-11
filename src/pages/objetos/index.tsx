import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Button } from '@components/inputs/Button/Button';
import Link from '@components/navigation/Link/Link';
import { Box, ButtonProps, Container } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import { ObjetosTable } from 'ui/partials/objetos/_ObjetosTable';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Meus objetos',
    },
});

const Objetos: NextPage = () => {
    return (
        <Container>
            <PageTitle
                title="Lista de objetos disponíveis"
                subtitle="Lista de objetos não entregues ao dono"
            />

            <ObjetosTable />

            <Box sx={{ textAlign: 'center', my: 4.5 }}>
                <Link
                    Component={Button}
                    href="/objetos/novo"
                    mui={{ variant: 'contained' } as ButtonProps}
                >
                    Novo objeto
                </Link>
            </Box>
        </Container>
    );
};

export default Objetos;
