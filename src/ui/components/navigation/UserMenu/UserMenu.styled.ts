import { Button } from '@components/inputs/Button/Button';
import { Menu, MenuItem, styled } from '@mui/material';

export const UserMenuButton = styled(Button)`
    gap: ${({ theme }) => theme.spacing(2.75)};
    padding-right: ${({ theme }) => theme.spacing()};
    padding-left: ${({ theme }) => theme.spacing(1.5)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        gap: ${({ theme }) => theme.spacing(6)};
        padding-right: ${({ theme }) => theme.spacing(2.5)};
        padding-left: ${({ theme }) => theme.spacing(3.5)};
    }
`;

export const MenuStyled = styled(Menu)`
    .MuiList-root {
        padding: 0;

        .MuiLink-root {
            text-decoration: none;
            color: ${({ theme }) => theme.palette.text.primary};
        }
    }

    .MuiPaper-root {
        box-shadow: none;
        border: 0.5px solid ${({ theme }) => theme.palette.divider};
    }
`;

export const MenuItemStyled = styled(MenuItem)`
    padding: ${({ theme }) => theme.spacing() + ' ' + theme.spacing(3.25)};
    font-size: 0.75rem;
    justify-content: center;

    ${({ theme }) => theme.breakpoints.up('md')} {
        padding: ${({ theme }) => theme.spacing(1.5) + ' ' + theme.spacing(5)};
        font-size: 1.125rem;
    }
`;
