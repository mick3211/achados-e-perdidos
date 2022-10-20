import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)`
    text-transform: none;
    box-shadow: none !important;
    font-weight: 400;
    font-size: 0.75rem;
    padding: ${({ theme }) => theme.spacing() + ' ' + theme.spacing(1.75)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 1.125rem;
        padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(6.5)};
    }
`;
