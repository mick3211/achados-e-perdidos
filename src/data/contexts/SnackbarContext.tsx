import React, { createContext, useState } from 'react';

interface SnackbarStateInterface {
    message: string;
    severity: 'error' | 'warning' | 'info' | 'success';
}

const initialState: SnackbarStateInterface = {
    message: '',
    severity: 'info',
};

const initialValue = {
    snackbarState: initialState,
    setSnackMessage: (state: SnackbarStateInterface) => {},
};

export const snackbarContext = createContext(initialValue);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [snackbarState, setSnackbarState] = useState(initialState);

    function setSnackMessage(state: SnackbarStateInterface) {
        setSnackbarState(state);
    }

    return (
        <snackbarContext.Provider value={{ snackbarState, setSnackMessage }}>
            {children}
        </snackbarContext.Provider>
    );
};
