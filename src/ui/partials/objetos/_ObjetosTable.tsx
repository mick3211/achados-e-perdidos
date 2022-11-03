import Link from '@components/navigation/Link/Link';
import { Box, Button, Typography } from '@mui/material';
import { useObjetosTable } from 'data/hooks/partials/useObjetosTable.partial';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@components/data-dispay/Table/Table';
import { Dialog } from '@components/feedback/Dialog/Dialog';

export const ObjetosTable: React.FC = () => {
    const {
        objetos,
        error,
        podeEditar,
        podeApagar,
        podeEntregar,
        objetoExcluir,
        setObjetoExcluir,
        deleteObjeto,
    } = useObjetosTable();

    return error ? (
        <Typography align="center" color="error">
            Não foi possível carregar as informações dos objetos
        </Typography>
    ) : objetos?.length === 0 ? (
        <Typography align="center">
            Não há objetos cadastrados para este local
        </Typography>
    ) : (
        <>
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
                                            Component={Button}
                                            mui={{ size: 'small' }}
                                        >
                                            Editar
                                        </Link>
                                    )}
                                    {podeApagar(item) && (
                                        <Button
                                            size="small"
                                            color="error"
                                            onClick={() =>
                                                setObjetoExcluir(item)
                                            }
                                        >
                                            Apagar
                                        </Button>
                                    )}
                                    {podeEntregar(item) && (
                                        <Link
                                            href={`/${item.id}/entrega`}
                                            Component={Button}
                                            mui={{ size: 'small' }}
                                        >
                                            Informar entrega
                                        </Link>
                                    )}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog
                open={objetoExcluir !== undefined}
                title="Tem certeza que deseja excluir o item abaixo?"
                onClose={() => setObjetoExcluir(undefined)}
                onConfirm={() => objetoExcluir && deleteObjeto(objetoExcluir)}
            >
                <>
                    <Typography>Nome: {objetoExcluir?.nome}</Typography>
                    <Typography>
                        Descrição: {objetoExcluir?.descricao}
                    </Typography>
                    <Typography>
                        Status:{' '}
                        {objetoExcluir?.entregue ? 'Entregue' : 'Não entregue'}
                    </Typography>
                    <Typography fontWeight={700} fontSize={14} sx={{ mt: 2 }}>
                        Atenção: esta ação não poderá ser desfeita
                    </Typography>
                </>
            </Dialog>
        </>
    );
};
