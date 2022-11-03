import { Alert, Snackbar } from '@mui/material';
import { snackbarContext } from 'data/contexts/SnackbarContext';
import React, { useContext } from 'react';

export const GlobalSnackbar: React.FC = () => {
    const { snackbarState, setSnackMessage } = useContext(snackbarContext);

    return (
        <Snackbar
            open={snackbarState.message.length > 0}
            autoHideDuration={4000}
            onClose={() =>
                setSnackMessage({
                    message: '',
                    severity: snackbarState.severity,
                })
            }
        >
            <Alert severity={snackbarState.severity}>
                {snackbarState.message}
            </Alert>
        </Snackbar>
    );
};
