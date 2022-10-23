import { styled, TextField } from '@mui/material';

export const FileFieldWrapper = styled('span')`
    position: relative;
`;

export const FileInputStyled = styled('input')`
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
`;

FileInputStyled.defaultProps = {
    type: 'file',
};
