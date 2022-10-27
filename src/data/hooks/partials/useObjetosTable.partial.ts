import { ObjetoInterface } from 'data/@types/ObjetoInterface';
import { ObjetosContext } from 'data/contexts/ObjetosContext';
import { LinkResolver } from 'data/services/ApiService';
import { useContext } from 'react';

export function useObjetosTable() {
    const { objetos, error } = useContext(ObjetosContext);

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

    return { objetos, error, podeEditar, podeApagar, podeEntregar };
}
