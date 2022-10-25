import { ObjetoInterface } from 'data/@types/ObjetoInterface';
import { UserContext } from 'data/contexts/UserContext';
import { useContext } from 'react';
import { useApiHateoas } from '../useApi';

export function useObjetos() {
    const { userData } = useContext(UserContext).userState;
    const { data, error } = useApiHateoas<ObjetoInterface[]>(
        userData.links,
        'listar_objetos_local'
    );

    return {
        objetos: data,
        error,
    };
}
