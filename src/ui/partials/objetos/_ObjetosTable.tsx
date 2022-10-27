import Link from '@components/navigation/Link/Link';
import { Box, Typography } from '@mui/material';
import { useObjetosTable } from 'data/hooks/partials/useObjetosTable.partial';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@components/data-dispay/Table/Table';

export const ObjetosTable: React.FC = () => {
    const { objetos, error, podeEditar, podeApagar, podeEntregar } =
        useObjetosTable();

    return error ? (
        <Typography align="center" color="error">
            Não foi possível carregar as informações dos objetos
        </Typography>
    ) : objetos?.length === 0 ? (
        <Typography align="center">
            Não há objetos cadastrados para este local
        </Typography>
    ) : (
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
                        <TableCell>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {podeEditar(item) && (
                                    <Link
                                        href={`/objetos/editar?id=${item.id}`}
                                    >
                                        Editar
                                    </Link>
                                )}
                                {podeApagar(item) && (
                                    <Link
                                        href={`/editar/${item.id}`}
                                        mui={{ color: 'error' }}
                                    >
                                        Apagar
                                    </Link>
                                )}
                                {podeEntregar(item) && (
                                    <Link href={`/${item.id}/editar`}>
                                        Informar entrega
                                    </Link>
                                )}
                            </Box>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
