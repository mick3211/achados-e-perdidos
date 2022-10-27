import { TextField, TextFieldProps } from '@mui/material';
import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    useState,
} from 'react';
import { FileFieldWrapper, FileInputStyled } from './FileField.styled';

interface FileFieldProps
    extends Omit<
        DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        'onChange'
    > {
    onChange: (files: FileList) => void;
    MuiInputProps?: Omit<TextFieldProps, 'defaultValue'>;
    defaultValue?: string;
}

export const FileField: React.FC<FileFieldProps> = ({
    MuiInputProps,
    defaultValue,
    ...props
}) => {
    const [fileName, setFileName] = useState(defaultValue || '');

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const files = ev.target.files;

        if (files) {
            setFileName(files[0].name);
            props?.onChange?.(files);
        }
    };

    return (
        <FileFieldWrapper>
            <TextField fullWidth {...MuiInputProps} value={fileName} disabled />
            <FileInputStyled {...props} onChange={handleChange} type="file" />
        </FileFieldWrapper>
    );
};
