import {
    userInitialState,
    UserReducerInterface,
    useUserReducer,
} from 'data/reducers/UserReducer';
import { createContext } from 'react';

export const UserContext = createContext({
    userState: userInitialState,
    userDispatch: () => {},
} as UserReducerInterface);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const userReducer = useUserReducer();

    return (
        <UserContext.Provider value={userReducer}>
            {children}
        </UserContext.Provider>
    );
};
