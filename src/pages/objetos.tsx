import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@components/data-dispay/Table/Table';
import { Button } from '@components/inputs/Button/Button';
import Link from '@components/navigation/Link/Link';
import { Box, ButtonProps, Container } from '@mui/material';
import { useObjetos } from 'data/hooks/pages/useObjetos.page';
import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Meus objetos',
    },
});

const Objetos: NextPage = () => {
    const { objetos, error } = useObjetos();
    return (
        <Container>
            <PageTitle
                title="Lista de objetos disponíveis"
                subtitle="Lista de objetos não entregues ao dono"
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Descrição</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {objetos?.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{item.descricao}</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box sx={{ textAlign: 'center', mt: 4.5 }}>
                <Link
                    Component={Button}
                    href="/novo-objeto"
                    mui={{ variant: 'contained' } as ButtonProps}
                >
                    Novo objeto
                </Link>
            </Box>
        </Container>
    );
};

export default Objetos;
