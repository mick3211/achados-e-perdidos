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

export const SmallButtonStyled = styled(ButtonStyled)`
    font-size: 0.5rem;
    padding: ${({ theme }) => theme.spacing(0.5) + ' ' + theme.spacing(2.5)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 0.875rem;
        padding: ${({ theme }) => theme.spacing() + ' ' + theme.spacing(3.5)};
    }
`;
