import { styled, AppBar } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
    padding: ${({ theme }) => theme.spacing(2)} 0;
    background-color: ${({ theme }) => theme.palette.background.default};

    .MuiToolbar-root {
        padding: 0;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        padding: ${({ theme }) => theme.spacing(4)} 0;
    }
`;

export const ButtonsContainer = styled('div')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-left: auto;
`;
