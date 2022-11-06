import {
    Button,
    Dialog as MuiDialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

export interface DialogProps {
    open: boolean;
    title: string;
    onClose: () => void;
    children?: React.ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    noCancel?: boolean;
    noConfirm?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
    open,
    title,
    onClose,
    children,
    onCancel,
    onConfirm,
    noCancel,
    noConfirm,
    cancelText = 'Cancelar',
    confirmText = 'Confirmar',
}) => {
    return (
        <MuiDialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                {!noCancel && (
                    <Button variant="outlined" onClick={onCancel ?? onClose}>
                        {cancelText}
                    </Button>
                )}
                {!noConfirm && (
                    <Button variant="contained" onClick={onConfirm ?? onClose}>
                        {confirmText}
                    </Button>
                )}
            </DialogActions>
        </MuiDialog>
    );
};
