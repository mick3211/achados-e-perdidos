import type { LocalInterface } from 'data/@types/LocalInterface';
import { LoginService } from 'data/services/LoginService';
import produce from 'immer';
import { useEffect, useReducer } from 'react';

export const userInitialState = {
    userData: {
        contato: '',
        endereco: '',
        nome: '',
    } as LocalInterface,
    isLogging: true,
};

type UserStateType = typeof userInitialState;
type UserReducerActions = 'SET_USER' | 'SET_IS_LOGGING';
type UserReducerActionType = {
    type: UserReducerActions;
    payload: unknown;
};

export interface UserReducerInterface {
    userState: UserStateType;
    userDispatch: React.Dispatch<UserReducerActionType>;
}

const userReducer = (
    state: UserStateType,
    action: UserReducerActionType
): UserStateType => {
    const nextState = produce(state, draft => {
        switch (action.type) {
            case 'SET_USER':
                draft.userData = action.payload as LocalInterface;
                break;
            case 'SET_IS_LOGGING':
                draft.isLogging = action.payload as boolean;
                break;
        }
    });

    return nextState;
};

export function useUserReducer() {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);

    const getUser = async () => {
        const currentUser = await LoginService.getUser();

        if (currentUser) {
            userDispatch({ type: 'SET_USER', payload: currentUser });
        }

        userDispatch({ type: 'SET_IS_LOGGING', payload: false });
    };

    useEffect(() => {
        getUser();
    }, []);

    return {
        userState,
        userDispatch,
    };
}
