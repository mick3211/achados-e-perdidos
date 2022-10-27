import { ObjetoInterface } from 'data/@types/ObjetoInterface';
import { useApiHateoas } from 'data/hooks/useApi';
import React, { createContext, useContext } from 'react';
import { UserContext } from './UserContext';

interface ObjetoContextInterface {
    objetos?: ObjetoInterface[];
    error?: Error;
}

export const ObjetosContext = createContext({
    objetos: [] as ObjetoInterface[],
    error: undefined,
} as ObjetoContextInterface);

export const ObjetosProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { userData } = useContext(UserContext).userState;
    const { data, error } = useApiHateoas<ObjetoInterface[]>(
        userData.links,
        'listar_objetos_local'
    );

    return (
        <ObjetosContext.Provider
            value={{ objetos: data as ObjetoInterface[], error }}
        >
            {children}
        </ObjetosContext.Provider>
    );
};
