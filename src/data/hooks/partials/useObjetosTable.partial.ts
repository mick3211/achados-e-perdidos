import { ObjetoInterface } from 'data/@types/ObjetoInterface';
import { ObjetosContext } from 'data/contexts/ObjetosContext';
import { snackbarContext } from 'data/contexts/SnackbarContext';
import { ApiServiceHateoas, LinkResolver } from 'data/services/ApiService';
import { useContext, useState } from 'react';
import { mutate } from 'swr';

export function useObjetosTable() {
    const [objetoExcluir, setObjetoExcluir] = useState<ObjetoInterface>();
    const { objetos, error } = useContext(ObjetosContext);
    const { setSnackMessage } = useContext(snackbarContext);

    const podeEditar = (objeto: ObjetoInterface): boolean => {
        const link = LinkResolver(objeto.links, 'atualizar_objeto');
        return link !== undefined;
    };

    const podeApagar = (objeto: ObjetoInterface): boolean => {
        const link = LinkResolver(objeto.links, 'apagar_objeto');
        return link !== undefined;
    };
    const podeEntregar = (objeto: ObjetoInterface): boolean => {
        const link = LinkResolver(objeto.links, 'definir_dono_objeto');
        return link !== undefined;
    };

    const deleteObjeto = async (objeto: ObjetoInterface) => {
        ApiServiceHateoas(objeto.links, 'apagar_objeto', async req => {
            try {
                await req();
                mutate('listar_objetos_local');
                setObjetoExcluir(undefined);
                setSnackMessage({
                    message: 'Objeto excluído',
                    severity: 'info',
                });
            } catch (err) {}
        });
    };

    return {
        objetos,
        error,
        podeEditar,
        podeApagar,
        podeEntregar,
        objetoExcluir,
        setObjetoExcluir,
        deleteObjeto,
    };
}
